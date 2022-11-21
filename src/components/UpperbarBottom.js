import React from 'react';


function UpperbarBottom() {
  const sameTab = url => {
    window.open(url, '_self', 'noopener,noreferrer');
  };

  return (
    <div className='UpperbarBottom'>
      <div onClick={() => sameTab('https://dainty-khapse-f31682.netlify.app/about')}> 
          <a href="https://dainty-khapse-f31682.netlify.app/about" target="_self" rel="noopener noreferrer"> 
          <button className="button-52" >About</button></a> 
      </div> &nbsp; &nbsp; &nbsp;
      <div onClick={() => sameTab('https://dainty-khapse-f31682.netlify.app/guide')}> 
          <a href="https://dainty-khapse-f31682.netlify.app/guide" target="_self" rel="noopener noreferrer"> 
          <button className="button-52" >Guide</button></a> 
      </div>
    </div>

  )
}

export default UpperbarBottom;


