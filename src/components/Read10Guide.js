import React from 'react';
import { useNavigate } from 'react-router-dom';

function Read10Guide() {
  const navigate = useNavigate();
  
  return (
    <div>
        <h4>SYSTEM MANUEL</h4>
        <p>Betelegeuse Foundation System is open to everybody.</p>
        <p>1. Make sure you are on Aurora Test Network on your Metamask</p>
        <br />
        <button className='button-54' onClick={ () => navigate("/")}>Homepage</button>
    </div>
  )
}

export default Read10Guide;