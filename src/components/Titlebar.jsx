import React from 'react'

import './Titlebar.css';

function Titlebar() {
  return (
    <div>


      <div className="titleheader">
    
        <div className="titleheader__nav">
        
            <div className="titleheader__option">

            <span className="titleheader__optionLineTwo">Find a store</span>
            </div>
        
            <div className="titlevr"></div>
        
            <div className="titleheader__option">
            
            <span className="titleheader__optionLineTwo">Buying guides</span>
            </div>
        
            <div className="titlevr"></div>
            
        <div className="titleheader__option">
        
            <span className="titleheader__optionLineTwo">Contact us</span>
        </div>

        
            
        
        </div>
  </div>
    </div>
  )
}

export default Titlebar;