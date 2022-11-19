import React from 'react'
import {ethers} from "ethers";
import {ABI} from "./ContractABI";
import {CONTRACT_ADDRESS} from "./ContractAddress";
 
function WCloseVoting() {
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

    const closeVotingSession = async () => {
        connectContract();
        const txResponse = await contract.closeVoting();
        await txResponse.wait();
        await contract.resetTable();
    }


  return (
    <div>
        <button className='button-54 redButton' onClick={closeVotingSession}> Close Voting (Admin)</button>
    </div>
  )
}

export default WCloseVoting;