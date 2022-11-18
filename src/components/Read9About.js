import React from 'react'
import { useNavigate } from 'react-router-dom';

function Read9About() {
  const navigate = useNavigate();
  return (
    <div>
        <h4>BETELGEUSE FOUNDATION</h4>
        <p>Betelegeuse Foundation is project prepared for application to NEAR MetaBuildHackaton III</p>
        <p>Project Owner</p>
        <br />
        <button className='button-56' onClick={ () => navigate("/")}>Homepage</button>
    </div>
  )
}

export default Read9About;