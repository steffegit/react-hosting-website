import React from 'react'
import './header.css'
import server from '../../assets/server.svg'

const Header = () => {
  return (
    <div className="host__header section__padding" id="home">
      <div className='host__header-content'>
        <h1 className='gradient__text'>For the best price-performance ratio</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam enim impedit, beatae perferendis praesentium perspiciatis voluptate esse obcaecati quod ratione quos repellat nesciunt, quis labore ducimus vel iure dignissimos.</p>
        <div className='host__header-content__input'>
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
      </div>
      <div className='host__header-image'>
        {/* TODO: CHANGE THIS IMAGE CUZ ITS DOGSHIT */}
        <img src={server} alt='server' />
      </div>
    </div>
  )
}

export default Header