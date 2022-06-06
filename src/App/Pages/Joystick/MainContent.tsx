import React from 'react'
import * as C from './styles'
import 'animate.css';

function MainContent() {
  return (
    <C.MainContent> {/* Row */}
          <section className='col-1 animate__animated animate__fadeInLeftBig' id="main">
            <h2>PS4 V2 <br/> DualShock 4</h2>
            <h3>Wireless Controller for PlayStation 4</h3>
            <p>(Compatible/Generic)</p>
            <h4>$32.50</h4>
            <a target="_blank" rel="noreferrer" href="https://www.playstation.com/pt-br/accessories/dualshock-4-wireless-controller/"><button type="button">Buy Now <img src="./img/arrow.png" alt="" /></button></a>
          </section>
          
          <section className='col-2 animate__animated animate__fadeInRightBig'>
            <img src=".\img\dualshock-controller-black.png" alt="" className='controller' />
            <div className="color-box"></div>
          </section>
      </C.MainContent>
  )
}

export default MainContent