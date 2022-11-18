import React from 'react';
import LowerbarMain from './LowerbarMain';

function Lowerbar() {
  return (
    <div className="Lowerbar">
      <Router>
          <Routes>
            <Route path="/" element={ <LowerbarMain /> } />
            <Route path="/about" element={ <About /> }/>
            <Route path="/guide" element={ <Guide /> } />
          </Routes>
      </Router>
    </div>
  )
}

export default Lowerbar