import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Read2Balance from './Read2Balance';
import Read3Info from './Read3Info';
import Read4Check from "./Read4Check";
import D1Enable from "./D1Enable";

function Read1Details() {
  const {ethereum} = window;
  const navigate = useNavigate();

  let[metamaskAccount, setMetamaskAccount] = useState([]);
  const connectMetamask =  async () => {
    if(window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: "eth_requestAccounts"});
      localStorage.setItem('account', JSON.stringify(accounts[0]));
      setMetamaskAccount(JSON.parse(window.localStorage.getItem('account')));
    } else {
      setMetamaskAccount("install metamask to your browser my good lord");
    }
  }

  useEffect(() => {
    setMetamaskAccount(JSON.parse(window.localStorage.getItem('account')));
  }, [metamaskAccount]);
  

  return (
    <div>
      <button className='button-54' onClick={connectMetamask}> Connect to Metamask </button>
      <p>Your Account is: {metamaskAccount}</p>
      <Read2Balance />
      <Read3Info />
      <Read4Check account={metamaskAccount} />
      <button className='button-54' onClick={() => navigate("/all")}>ALL PROPOSALS</button>
      <br />
      <br />
      <h3>DONATION AREA</h3>
      <button className='button-54 lightGreen' onClick={() => navigate("/donate")}>DONATE</button>
      <br />
      <br />
      <button className='button-54 lightGreen' onClick={() => navigate("/treasury")} >TREASURY</button>
      <br />
      <br />
      <D1Enable />

    </div>
  )
}

export default Read1Details;