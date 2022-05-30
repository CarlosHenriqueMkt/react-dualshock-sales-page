import React from 'react'
import * as C from '../App.styles'

function MainContent() {
  return (
    <C.MainContent> {/* Row */}
          <section className='col-1' id="main">
            <h2>PS4 V2 <br/> DualShock 4</h2>
            <h3>Wireless Controller for PlayStation 4</h3>
            <p>(Compatible/Generic)</p>
            <h4>$32.50</h4>
            <button type="button">Buy Now <img src="./img/arrow.png" alt="" /></button>
          </section>
          
          <section className='col-2'>
            <img src="./img/controller.png" alt="" className='controller' />
            <div className="color-box"></div>
            <div className="add-btn">
              <img src="./img/add.png" alt="" />
              <p><small>Add to Cart</small></p>
            </div>
          </section>
      </C.MainContent>
  )
}

export default MainContent