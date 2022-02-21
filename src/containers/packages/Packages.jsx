import React from 'react'
import './packages.css'
import { Package } from '../../components'
import img1 from '../../assets/apps.svg'
import img2 from '../../assets/control.svg'
import img3 from '../../assets/webdev.svg'



const Packages = () => {
  return (
    <div className='host__packages section__margin' id="packages">
        <div className='host__packages-container_text'>
          <h1>Packages</h1>
          <p>Choose your optimal package</p>
        </div>

        <div className='host__packages-container__packages'>
          <Package title="Option1" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis quas assumenda possimus, amet eligendi non dicta enim ducimus dolorem." price="5" imgUrl={img1}/>
          <Package title="Option2" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis quas assumenda possimus, amet eligendi non dicta enim ducimus dolorem." price="10" imgUrl={img2} />
          <Package title="Option3" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis quas assumenda possimus, amet eligendi non dicta enim ducimus dolorem." price="20" imgUrl={img3} />
        </div>
      </div>
  )
}

export default Packages