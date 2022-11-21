import React from 'react'

function UpperbarTop1() {
  const sameTab = url => {
    window.open(url, '_self', 'noopener,noreferrer');
  };
  
  return (
    <div className='heading' onClick={() => sameTab('https://dainty-khapse-f31682.netlify.app/')}> 
        <a className='links' href="https://dainty-khapse-f31682.netlify.app/" target="_self" rel="noopener noreferrer"> 
            <span className='links' style={{color: "red"}}>BETELGEUSE</span>FOUNDATION
        </a>
    </div>
  )
}

export default UpperbarTop1;