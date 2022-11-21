import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ABI} from "./ContractABI.js";
import {CONTRACT_ADDRESS} from "./ContractAddress.js";
import {ethers } from "ethers"; 
/* global BigInt */

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
    if(amount < 1) {
      alert("invalid amount");
    } else {
      let finalAmount = BigInt(amount*(10**18));
      const txResponse = await contract.donate(tokenAddress, finalAmount);
      await txResponse.wait();
    }
  }

  let[tokenAddress6, setTokenAddress6] = useState("");
  let[amount6, setAmount6] = useState();

  const donate6 = async () => {
    await connectContract();
    if(amount6 < 1) {
      alert("invalid amount");
    } else {
      let finalAmount6 = BigInt(amount6*(10**6));
      const txResponse = await contract.donate(tokenAddress6, finalAmount6);
      await txResponse.wait();
    }
  }

  const navigate = useNavigate();
  
  return (
    <div>
        <button className='button-54 lightGreen' onClick={donate}>Donate (18 Decimals Coins)</button>
        <br />
        <br />
        <input type="string" value={tokenAddress}  onChange={e => setTokenAddress(e.target.value)} placeholder='enter token address'/> 
        <br />
        <br />
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder='enter amount (without decimals)'/>
        <br />
        <br />
        <button className='button-54 lightGreen' onClick={donate6}>Donate (6 Decimals Coins)</button>
        <br />
        <br />
        <input type="string" value={tokenAddress6}  onChange={e => setTokenAddress6(e.target.value)} placeholder='enter token address'/> 
        <br />
        <br />
        <input type="number" value={amount6} onChange={e => setAmount6(e.target.value)} placeholder='enter amount (without decimals)'/>
        <br />
        <br />
        <br />
        <button className='button-54' onClick={()=>navigate("/")}>HOMEPAGE</button>
    </div>
  )
}

export default D2Donate