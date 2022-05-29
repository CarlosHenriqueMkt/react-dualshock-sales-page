import React from 'react'
import * as C from '../App.styles'


function Games() {
  return (
  <C.Games>
    <section>
      <article className='gameTittle'>
      <h2>Exclusive Games</h2>
      <p>Meet some of the best games to test your new DualShock 4</p>
      </article>

      <div id="games" className="grid-columns">
        <img src=".\img\detroit.jpg" alt="" />
        <img src=".\img\detroit.jpg" alt="" />
        <img src=".\img\detroit.jpg" alt="" />
        <img src=".\img\detroit.jpg" alt="" />
        <img src=".\img\detroit.jpg" alt="" />
        <img src=".\img\detroit.jpg" alt="" />
      </div>
    </section>
  </C.Games>
  )
  
}

export default Games