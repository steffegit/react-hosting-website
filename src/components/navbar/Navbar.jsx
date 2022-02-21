import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='host__navbar'>
      <div className='host__navbar-links'>
        <div className='host__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='host__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#packages">Packages</a></p>
        </div>
      </div>
      <div className='host__navbar-sign'>
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className='host__navbar-menu'>
        {toggleMenu 
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/> 
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/> 
        }

        {toggleMenu && (
          <div className='host__navbar-menu_container scale-up-center'>
            <div className='host__navbar-menu_container-links'>
              <p><a href="#home">Home</a></p> 
               <p><a href="#features">Features</a></p>
                <p><a href="#packages">Packages</a></p>
                <div className='host__navbar-menu_container-links-sign'>
                  <p>Sign In</p>
                  <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
  )
}

export default Navbar