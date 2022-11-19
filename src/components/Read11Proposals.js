import React from 'react';
import { useNavigate } from 'react-router-dom';

function Read11Proposals() {
    const navigate = useNavigate();

  return (
    <div>
        <button className='button-54' onClick={() => navigate("/proposals")}>SEE WAITING PROPOSALS</button>
        <br />
        <br />
        <button className='button-54' onClick={() => navigate('/passed')}>SEE PASSED PROPOSALS</button>
        <br />
        <br />
        <button className='button-54' onClick={() => navigate('/rejected')}>SEE REJECTED PROPOSALS</button>
        <br />
        <br />
        <button className='button-54' onClick={() => navigate("/details")}>PREVIOUS VOTINGS</button>
        <br />
        <br />
        <br />
        <button className='button-54' onClick={ ()=>navigate("/")}>Homepage</button>
    </div>
  )
}

export default Read11Proposals