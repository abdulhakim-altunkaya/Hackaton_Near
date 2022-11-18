import React from 'react';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";
import Read1Details from './Read1Details';
import Read5Rejected from './Read5Rejected';
import Read6Passed from "./Read6Passed";
import Read7Waiting from "./Read7Waiting";
import Read8Struct from './Read8Struct';

function Read() {
  return (
    <div  className='ReadArea'>
      <Router>
          <Routes>
            <Route path="/" element={ <Read1Details /> } />
            <Route path="/rejected" element={ <Read5Rejected /> }/>
            <Route path="/passed" element={ <Read6Passed /> } />
            <Route path="/proposals" element={ <Read7Waiting/> } />
            <Route path="/details" element={ <Read8Struct /> } />
          </Routes>
      </Router>
    </div>
  )
}

export default Read