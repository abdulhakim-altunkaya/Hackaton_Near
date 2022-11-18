import React from 'react';
import { ABI } from "./ContractABI.js";
import { CONTRACT_ADDRESS } from "./ContractAddress";
import { useState } from 'react';
import { ethers } from "ethers"; 

function Read3Info() {
  let[foundationAddress, setFoundationAddress] = useState("");
  let[foundationOwner, setFoundationOwner] = useState("");
  let contract;
  let signer;
  const CONTRACT_ABI = ABI;
  const ADDRESS = CONTRACT_ADDRESS;

  const connectContract = async () => {
    const Address = ADDRESS;
    const ABI = CONTRACT_ABI;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(Address, ABI, signer);
  }

  const getData = async () => {
    connectContract();
    const txResponse = await contract.getDetails();
    const {0: owner, 1: contractAddress} = txResponse;
    setFoundationAddress(contractAddress);
    setFoundationOwner(owner);
  }

  return (
    <div>
      <button className='button-54' onClick={getData}> See Contract Details</button>
      <p><strong>Betelgeuse Foundation Contract Address:</strong>  {foundationAddress}</p>
      <p><strong>Contract Administrator ("Owner") Address:</strong>  {foundationOwner}</p>
    </div>
  )
}

export default Read3Info;