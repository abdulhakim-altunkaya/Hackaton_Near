import React from 'react';
import { ethers } from "ethers";
import { ABI } from "./ContractABI";
import { CONTRACT_ADDRESS } from "./ContractAddress";
 
function WChooseMain() {

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

    const chooseMain = async () => {
        await connectContract();
        await contract.chooseMainProposal();
        alert("Success, main proposal choosen. You can now see it by clicking on See Main Proposal Button")
    }
    return (
        <div>
            <button className='button-54 redButton' onClick={chooseMain}>Choose Proposal (Admin)</button>
        </div>
    )
}

export default WChooseMain