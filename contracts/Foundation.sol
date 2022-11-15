//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.1;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/b2970b96e5e2be297421cd7690e3502e49f7deff/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/b2970b96e5e2be297421cd7690e3502e49f7deff/contracts/utils/Counters.sol";

contract Foundation {
    //1.OWNER CODE BLOCK
    //"owner" of the contract has "secretarial" role
    address private owner;
    error NotOwner(string message, address caller);
    modifier onlyOwner(){
        if(msg.sender != owner) {
            revert NotOwner("you are not owner",  msg.sender);
        }
        _;
    }
    constructor() {
        owner = msg.sender;
    }
    function renounceOwnership(address _newOwner) external onlyOwner {
        owner = _newOwner;
    }

    // 2. KEY STATE VARIABLES
    mapping(address => bool) internal memberMapping;
    address[] internal memberArray;
    mapping(address => uint) internal grantRecipientMapping;
    mapping(address => uint) internal charityRecipientMapping;
    address[] internal grantRecipientArray;
    address[] internal charityRecipientArray;

    //3.BECOMING A MEMBER
    //3.1 Membership Check
    modifier onlyMember(){
        bool status;
        for(uint i=0; i <memberArray.length; i++) {
            if(memberArray[i] == msg.sender) {
                status = true;
            }
        }
        require(status == true, "you are not a member");
        _;
    }

    //3.2 Membership Function
    function becomeMember() external payable {
        bool status = false;
        for(uint i=0; i<memberArray.length; i++) {
            if(memberArray[i] == msg.sender) {
                status = true;
            }
        }
        require(status == false, "you are already a member");
        require(msg.value >= 1 ether, "pay the membership fee of 1 FTM");
        memberArray.push(msg.sender);
        memberMapping[msg.sender] = true;
    }

    //4.FOUNDATION GRANT & CHARITY PROGRAM
    using Counters for Counters.Counter;
    Counters.Counter private _programIdCounter;
    enum ProposalStatusEnum {WAITING, PASSED, REJECTED}

    struct Programs {
        ProposalStatusEnum status;
        string programName;
        uint programBeneficiaries;
        uint implementationYear;
        uint programBudgetUSD;
        string[] programCountries;
    }
    mapping(uint => Programs) internal programsMapping;
    
    
    //Members can make program proposals. These proposal will later wait in waiting proposals

    function makeProgramProposal(

        string calldata _programName,
        uint _programBeneficiaries,
        uint _implementationYear,
        uint _programBudgetUSD,
        string[] calldata _programCountries
    ) external onlyMember {
        ProposalStatusEnum _status;
        Programs memory newProgram = Programs(
            _status,
            _programName, 
            _programBeneficiaries, 
            _implementationYear, 
            _programBudgetUSD, 
            _programCountries
        );
        uint programId = _programIdCounter.current();
        _programIdCounter.increment();
        programsMapping[programId] = newProgram;
    } 

    function getProgramDetails(uint id) external view returns(Programs memory) {
        return programsMapping[id];
    }

    



    







    bool public transferEnabled =  false;
    function toggleTransfer() external onlyOwner {
        transferEnabled = !transferEnabled;
    }

    function depositTokens(address _receiver, address _tokenAddress, uint _amount, uint _time) external {
        IERC20 token = IERC20(_tokenAddress);
        uint amount = _amount * (10**18);
        token.transfer(_receiver, amount);
    }










}