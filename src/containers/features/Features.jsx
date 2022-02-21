import React from 'react'
import { Feature } from '../../components'
import './features.css'

const Features = () => {
  return (
    <div className='host__features section__margin' id="features">
      <div className='host__features-feature'>
        <Feature title="Why choose us?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit quasi iusto voluptate ducimus provident numquam quod, sequi earum dolorem adipisci recusandae fugiat fugit corporis quidem voluptas similique libero perferendis!" />
      </div>
      <div className='host__features-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination.</h1>
        <p>Explore the packages</p>
      </div>
      <div className='host__features-container'>
        <Feature title="No input delay" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique soluta voluptas quod tempora accusantium harum."/>
        <Feature title="Cheap & Effective" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique soluta voluptas quod tempora accusantium harum."/>
        <Feature title="Golden Support" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique soluta voluptas quod tempora accusantium harum."/>
      </div>
    </div>
  )
}

export default Features