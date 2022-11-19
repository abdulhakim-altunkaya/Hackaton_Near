import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Read2Balance from './Read2Balance';
import Read3Info from './Read3Info';
import Read4Check from "./Read4Check";
 

function Read1Details() {
  const {ethereum} = window;
  const navigate = useNavigate();

  let[account, setAccount] = useState("");

  const connectMetamask =  async () => {
    if(window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: "eth_requestAccounts"});
      setAccount(accounts[0]);
    } else {
      setAccount("install metamask to your browser my good lord");
    }
  }

  return (
    <div>
      <button className='button-54' onClick={connectMetamask}> Connect to Metamask </button>
      <p>Your Account is: {account}</p>
      <Read2Balance />
      <Read3Info />
      <Read4Check account={account} />
      <button className='button-54' onClick={() => navigate("/proposals")}>SEE WAITING PROPOSALS</button>
      <br />
      <br />
      <button className='button-54' onClick={() => navigate('/passed')}>SEE PASSED PROPOSALS</button>
      <br />
      <br />
      <button className='button-54' onClick={() => navigate('/rejected')}>SEE REJECTED PROPOSALS</button>
      <br />
      <br />
      <button className='button-54' onClick={() => navigate("/details")}>PREVIOUS PROPOSALS DETAILS</button>
    </div>
  )
}

export default Read1Details;