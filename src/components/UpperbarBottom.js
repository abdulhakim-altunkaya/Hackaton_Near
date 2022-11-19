import React from 'react';


function UpperbarBottom() {
  const sameTab = url => {
    window.open(url, '_self', 'noopener,noreferrer');
  };

  return (
    <div className='UpperbarBottom'>
      <div onClick={() => sameTab('http://localhost:3000/about')}> 
          <a href="http://localhost:3000/about" target="_self" rel="noopener noreferrer"> 
          <button className="button-52" >About</button></a> 
      </div> &nbsp; &nbsp; &nbsp;
      <div onClick={() => sameTab('http://localhost:3000/guide')}> 
          <a href="http://localhost:3000/guide" target="_self" rel="noopener noreferrer"> 
          <button className="button-52" >Guide</button></a> 
      </div>
    </div>

  )
}

export default UpperbarBottom;


