import React from 'react';

import './Header.css';

import Titlebar from './Titlebar';

function Header() {
  return (
   <>
   {/* <Titlebar/> */}
   <div>
    <div className="header" style={{height:'70px',overflowY:'hidden'}}>
      
        <img className="header__logo" src="./images-removebg-preview.png" alt='no image'/>
      

      <div className="header__search">
        <input className="header__searchInput" type="search"  placeholder='Find your favorite product'/><i className='fa-solid fa-magnifying-glass' style={{marginLeft:'-40px',color:'grey'}}></i>
        {/* <SearchIcon className="header__searchIcon" /> */}
      </div>


      <div className="header__nav">
        
          <div className="header__option" style={{marginLeft:'250px'}}>

            <span className="header__optionLineTwo">Select your Pin Code</span>
          </div>
        
          <div style={{height:'25px',width:'1px',backgroundColor: 'white'}}></div>
        
          <div className="header__option">
          
            <span className="header__optionLineTwo"><i class="fa-solid fa-cart-shopping" style={{color: "#f7f9fd"}}></i> Cart</span>
          </div>
        
          <div style={{height:'25px',width:'1px',backgroundColor: 'white'}}></div>
          
        <div className="header__option">
        
          <span className="header__optionLineTwo"><i class="fa-solid fa-user" style={{color: "#f4f6fb"}}></i> Login</span>
        </div>

        
          
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Header