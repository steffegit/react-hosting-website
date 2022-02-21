import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='host__footer section__padding'>
      <div className='host__footer-heading'>
        <h1 className='gradient__text'>Get the BEST from the BEST</h1>
      </div>
      <div className='host__footer-btn'>
        <p>Contact Us For Custom Plans</p>
      </div>

      <div className='host__footer-links'>

        <div className='host__footer-links_logo'>
          <img src={logo} alt="logo" />
          <p>Addres will be shown soon</p>
        </div>

        <div className='host__footer-links_div'>
          <h4>Links</h4>
          <p>About Us</p>
          <p>Social Media</p>
          <p>Overons</p>
          <p>Contact</p>
        </div>

        <div className='host__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='host__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Address here</p>
          <p>Phone number here</p>
          <p>mail@mail.to</p>
        </div>
        
      </div>

    <div className='host__footer-copyright'>
      <p>Host © 2022. All rights reserved.</p>
    </div>

    </div>
  )
}

export default Footer