import React from 'react'
import { useNavigate } from 'react-router-dom';

function Read9About() {
  const navigate = useNavigate();
  return (
    <div>
        <h4>BETELGEUSE FOUNDATION</h4>
        <p>Betelegeuse Foundation is project prepared for application to NEAR MetaBuildHackaton III on Devpost website. For Hackaton details,
          please visit: <a className='links2' href="https://metabuild.devpost.com/">devpost.com</a>
        </p>
        <p>Project Owners: Abdulhakim ALTUNKAYA, Sedat TASKIRAN <br />
        Project Created in: November 2022</p>
        <p>Credits for button styles: <a className="links2" href="https://getcssscan.com/css-buttons-examples">getcssscan.com</a></p>
        <button className='button-54' onClick={ () => navigate("/")}>Homepage</button>

    </div>
  )
}

export default Read9About;