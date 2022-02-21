import React from 'react'
import './package.css'

const Package = ({title , about, price, imgUrl}) => {
  return (
    <div className='host__package-container__option'>
      <div className='host__package-container__option-title'>
        {/* TODO: maybe instead of img put an number like 1 2 3 */}
        <img src={imgUrl} alt="package_img" />
        <h1>{title}</h1>
      </div>
      <div className='host__package-container__option-text'>
        <p>{about}</p>
        {/* <div /> */}
        <h3 className='gradient__text'>Price</h3>
        <h4>{price}$</h4>
        {/* <div /> */}
        <button type="button">Buy Now</button>
      </div>
    </div>
  )
}

export default Package