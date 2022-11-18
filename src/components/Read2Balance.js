import React from 'react';
import { useState } from 'react';
import {ABI} from "./ContractABI.js";
import {CONTRACT_ADDRESS} from "./ContractAddress.js";
import {ethers } from "ethers"; 


function Read2Balance() {

  let[foundationBalance, setFoundationBalance] = useState("");
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

  const getBalance = async () => {
    connectContract();
    const txResponse = await contract.getBalance();
    if(txResponse < 1) {
      setFoundationBalance("Balance is 0");
    } else {
      let data = txResponse.toString();
      let data2 = data.slice(0, -18);
      setFoundationBalance(`${data2} `);
    }

  }
  return (
    <div>
      <button className='button-54' onClick={getBalance}>Foundation Balance</button>
      <p>Foundation Balance is: {foundationBalance}</p>
    </div>
  )
}

export default Read2Balance;