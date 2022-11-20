import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ABI} from "./ContractABI.js";
import {CONTRACT_ADDRESS} from "./ContractAddress.js";
import {ethers } from "ethers"; 

function D2Donate() {
  let[tokenAddress, setTokenAddress] = useState("");
  let[amount, setAmount] = useState();
  
  let contract;
  let signer;
  const CONTRACT_ABI = ABI;
  const ADDRESS = CONTRACT_ADDRESS

  const connectContract = async () => {
    const Address = ADDRESS;
    const ABI = CONTRACT_ABI;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(Address, ABI, signer);
  }

  const donate = async () => {
    await connectContract();
    const txResponse = await contract.donate(tokenAddress, amount);
    await txResponse.wait();
  }

  const navigate = useNavigate();
  
  return (
    <div>
        <button className='button-54 lightGreen' onClick={donate}>Donate</button>
        <br />
        <br />
        <input type="string" value={tokenAddress}  onChange={e => setTokenAddress(e.target.value)} placeholder='enter token address'/> 
        <br />
        <br />
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder='enter amount (with decimals)'/>
        <br />
        <br />
        <br />
        <button className='button-54' onClick={()=>navigate("/")}>HOMEPAGE</button>
    </div>
  )
}

export default D2Donate