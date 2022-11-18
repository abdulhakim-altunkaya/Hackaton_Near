import React from 'react'

function UpperbarTop1() {
  const sameTab = url => {
    window.open(url, '_self', 'noopener,noreferrer');
  };
  
  return (
    <div> onClick={() => sameTab('http://localhost:3000/about')}> 
      <a href="http://localhost:3000/about" target="_self" rel="noopener noreferrer"> 
      <span style={{color: "red"}}>BETELGEUSE </span> FOUNDATION</a> 
    </div>
  )
}

export default UpperbarTop1;