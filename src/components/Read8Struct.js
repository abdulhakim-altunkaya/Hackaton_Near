import React from 'react';
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "./ContractAddress";
import { ABI } from "./ContractABI";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
function Read8Struct() {
    const navigate = useNavigate();
    let[inputValue, setInputValue] = useState("");
    let contract;
    let signer;
    const CONTRACT_ABI = ABI;
    const ADDRESS = CONTRACT_ADDRESS;
    const connectContract = async () => {
        const ABI = CONTRACT_ABI;
        const Address = ADDRESS;
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(Address, ABI, signer);
    }

    let[name, setName] = useState("");
    let[yesVotes, setYesVotes] = useState("");
    let[noVotes, setNoVotes] = useState("");
    let[totalVotes, setTotalVotes] = useState("");
    const getStruct = async () => {
        await connectContract();
        const txResponse = await contract.getRecordStruct(inputValue);
        if(txResponse.proposalName.length < 2) {
            setName("no such proposal, enter correct id number");
            setNoVotes(0);
            setYesVotes(0);
            setTotalVotes(0);
        } else {
            const novotes = await txResponse.noV.toNumber();
            const yesvotes = await txResponse.yesV.toNumber();
            setName(txResponse.proposalName);
            setNoVotes(novotes);
            setYesVotes(yesvotes);
            setTotalVotes(novotes+yesvotes);
        }
    }



  return (
    <div>
        <button className='button-54' onClick={getStruct}>SEE PREVIOUS VOTINGS</button>
        <div style={{paddingTop:"20px", paddingBottom: "20px"}}>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='enter proposal id'/>
            <br />
            <div style={{lineHeight: "1.8", paddingTop: "10px"}}>
                <span><strong>Proposal Name: </strong> {name}</span> 
                <br />
                <span><strong>Yes Votes: </strong> {yesVotes}</span>
                <br />
                <span><strong>No Votes: </strong> {noVotes}</span>
                <br />
                <span><strong>Total Votes: </strong> {totalVotes}</span>
            </div>
        </div>
        <button className='button-54' onClick={ ()=>navigate("/")}>Homepage</button>
    </div>
  )
}

export default Read8Struct