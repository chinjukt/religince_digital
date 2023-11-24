import React from 'react';

import './Navbar.css';

function Navbar() {
  return (
    <>




        
        <div className='fixed-top'>
            <div className="header">
            
                <img
                className="header__logo"
                src="./images-removebg-preview.png" alt='no image'
                />
            

            <div className="header__search">
                <input className="header__searchInput" type="search"  placeholder='Find your favorite product'/>
                {/* <SearchIcon className="header__searchIcon" /> */}
            </div>


            <div className="header__nav">
                
                <div className="header__option">

                    <span className="header__optionLineTwo">Select your Pin Code</span>
                </div>
                
                <div className="vr"></div>
                
                <div className="header__option">
                
                    <span className="header__optionLineTwo"><i class="fa-solid fa-cart-shopping" style={{color: "#f7f9fd"}}></i> Cart</span>
                </div>
                
                <div className="vr"></div>
                
                <div className="header__option">
                
                <span className="header__optionLineTwo"><i class="fa-solid fa-user" style={{color: "#f4f6fb"}}></i> Login</span>
                </div>

                
                
                
            </div>
            </div>
            
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#003380'}}>
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    
                    <li className="nav-item dropdown" style={{marginLeft:"60px"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        MOBILES & TABLETS
                        </a>
                        
                    </li>

                    <li className="nav-item dropdown" style={{marginLeft:"30px"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        TELEVISIONS
                        </a>
                        
                    </li>

                    <li className="nav-item dropdown" style={{marginLeft:"30px"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        AUDIO
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown" style={{marginLeft:"30px"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        HOME APPLIANCES

                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown" style={{marginLeft:"30px"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        COMPUTERS
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown" style={{marginLeft:"30px"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        CAMERAS
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown" style={{marginLeft:"30px"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        KITCHEN APPLIANCES
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown" style={{marginLeft:"30px"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        PERSONAL CARE
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown" style={{marginLeft:"30px"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ACCESSORIES
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    
                    </ul>
                
                </div>
            </nav>
            
        </div>

    </>
  )
}

export default Navbar