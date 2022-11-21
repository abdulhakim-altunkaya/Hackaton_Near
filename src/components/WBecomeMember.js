import React from 'react'
import { ABI } from './ContractABI';
import { CONTRACT_ADDRESS } from "./ContractAddress";
import { ethers } from "ethers";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/* global BigInt */
   
function WBecomeMember() {
  const navigate = useNavigate();

  let contract;
  const ADDRESS = CONTRACT_ADDRESS;
  const CONTRACT_ABI = ABI;
  let signer;

  let [inputValue, setInputValue] = useState("");


  const connectContract = async () => {
    const Address = ADDRESS;
    const ABI = CONTRACT_ABI;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(Address, ABI, signer);
  }


  const becomeMember = async () => {
    await connectContract();
    if(inputValue < 1) {
      alert("you need to pay membership fee. Pay at least 5 Aurora Coin. Type 5 in the input area");
    } else {
      let finalAmount = BigInt(inputValue*(10**18));
      const txResponse = await contract.becomeMember({value: finalAmount});
      await txResponse.wait();
    }
  }

  const {ethereum} = window;
  let[membershipStatus, setMembershipStatus] = useState("");
  const checkStatus =  async () => {
    let account;
    if(window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: "eth_requestAccounts"});
      account = accounts[0];
    } else {
      alert("install metamask to your browser my good lord");
    }
    await connectContract();
    const txResponse = await contract.memberMapping(account);
    if(txResponse === true) {
        setMembershipStatus("You are a member");
    } else {
        setMembershipStatus("You are not a member yet");
    }
  }

  return (
    <div>            
        <button className='button-54' onClick={checkStatus}>Check to see if you are a Member</button>
        <p>{membershipStatus}</p>
        <button className='button-54' onClick={becomeMember}>Become a Member</button>
        <p>To become a member you need to pay at least 2 Aurora Coin to the Foundation</p>
        <input type="number" 
            value = {inputValue}
            placeholder='Minimum is 2'
            onChange={e => setInputValue(e.target.value) }/>
        <br />
        <br />
        <button className='button-54' onClick={()=> navigate("/")} >Homepage</button>
        
    </div>
  )
}

export default WBecomeMember;