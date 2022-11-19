import React from 'react';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";
import WDetails from './WDetails';
import WVote from './WVote';
import WBecomeMember from './WBecomeMember';
import WMakeProposals from './WMakeProposals';
import WChooseMain from './WChooseMain';
import WCloseVoting from './WCloseVoting';
import WRemove from './WRemove';
 
function Write() {
  return (
    <div className='WriteArea'>

        <Router>
            <Routes>
              <Route path="/" element={ <WDetails /> } />
              <Route path="/vote" element={ <WVote /> }/>
              <Route path="/member" element={ <WBecomeMember /> }/>
              <Route path="/submit" element={ <WMakeProposals /> }/>
              <Route path="/choose" element={ <WChooseMain /> } />
              <Route path="/close" element={ <WCloseVoting /> } />
              <Route path='/remove' element={ <WRemove /> } />
            </Routes>
        </Router>
    </div>
  )
}

export default Write;