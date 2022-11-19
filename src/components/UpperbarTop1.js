import React from 'react'

function UpperbarTop1() {
  const sameTab = url => {
    window.open(url, '_self', 'noopener,noreferrer');
  };
  
  return (
    <div className='heading' onClick={() => sameTab('http://localhost:3000/')}> 
        <a className='links' href="http://localhost:3000/" target="_self" rel="noopener noreferrer"> 
            <span className='links' style={{color: "red"}}>BETELGEUSE</span>FOUNDATION
        </a>
    </div>
  )
}

export default UpperbarTop1;