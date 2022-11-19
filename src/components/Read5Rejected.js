import React from 'react';
import { useState } from 'react';
import { ABI } from "./ContractABI.js";
import { CONTRACT_ADDRESS } from "./ContractAddress";
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';
 
function Read5Rejected() {

    const navigate = useNavigate();

    const CONTRACT_ABI = ABI;
    const ADDRESS = CONTRACT_ADDRESS;
    let signer;
    let contract;

    const connectContract = async () => {
        const Address = ADDRESS;
        const ABI = CONTRACT_ABI;
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(Address, ABI, signer);
    }

    let listProposals = [];
    const getArray = async () => {
        connectContract();
        const txResponse = await contract.getAllProRejected();
        listProposals = txResponse;
    }
    let[content, setContent] = useState("");
    const displayArray = async () => {
        await getArray();
        if(listProposals.length < 1) {
            setContent("No proposal has been rejected yet")
        } else {
            setContent(listProposals.map( word =>  <p key={word}> {word}</p> ) )
        }
    }

    return (
        <div>
            <button className='button-54' onClick={displayArray}>See Rejected Proposals</button>
            <div style={{paddingTop:"20px", paddingBottom: "20px"}}> <strong>Rejected Proposals: </strong>{content}</div>
            <button className='button-54' onClick={ () => navigate("/")}>Homepage</button>

        </div>
    )
}

export default Read5Rejected;