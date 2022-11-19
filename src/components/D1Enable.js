import React from 'react';
import {ABI} from "./ContractABI.js";
import {CONTRACT_ADDRESS} from "./ContractAddress.js";
import {ethers } from "ethers"; 

function D1Enable() {
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

    const enablePayments = async () => {
        await connectContract();
        const txResponse = await contract.toggleTransfer();
        await txResponse.wait();
    }
  return (

    <div>
        <div>
            <button className='button-54 lightGreen' onClick={enablePayments}>Enable/Disable Payments (Admin)</button>
        </div>
    </div>
  )
}

export default D1Enable;