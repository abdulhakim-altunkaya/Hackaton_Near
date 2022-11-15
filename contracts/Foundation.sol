//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.1;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/b2970b96e5e2be297421cd7690e3502e49f7deff/contracts/token/ERC20/IERC20.sol";

contract Foundation {
    //1.OWNER CODE BLOCK
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

    //KEY STATE VARIABLES
    mapping(address => bool) internal memberMapping;
    address[] internal memberArray;

    //2.BECOMING A MEMBER

    //2.1 Membership Check
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

    //2.2 Membership Function
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