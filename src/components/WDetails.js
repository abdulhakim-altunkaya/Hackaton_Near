import React from 'react';
import { useNavigate } from 'react-router-dom';
import WMainProposal from './WMainProposal';
import WLeave from './WLeave';
import WWithdraw from './WWithdraw';
import WChooseMain from "./WChooseMain";
import WCloseVoting from './WCloseVoting';

 
function WDetails() {
    const navigate = useNavigate();
    

    return (
        <div>
            <WMainProposal />
            <button className='button-54' onClick={ () => navigate("/vote") }>Vote for Proposal</button>
            <br />
            <br />
            <button className='button-54' onClick={ () => navigate("/member") }>Become Member</button>
            <br />
            <br />
            <button className='button-54' onClick={ () => navigate("/submit") }>Submit Proposal</button>
            <br />
            <br />
            <br />
            <WChooseMain />
            <br />
            <WCloseVoting />
            <br />
            <button className='button-54 redButton' onClick={ () => navigate("/remove") }>Remove Person (Admin)</button>
            <br />
            <br />
            <WWithdraw />
            <br />
            <br />
            <WLeave />
        </div>
    )
}

export default WDetails