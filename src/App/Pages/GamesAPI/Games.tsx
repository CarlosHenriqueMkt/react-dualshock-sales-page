import React from 'react'
import * as C from './styles'
import Divider from '@mui/material/Divider';


function Games() {
  return (
  <C.Games>
    <Divider><article className='gameTittle'> <h2>Exclusive Games</h2></article></Divider>
    <section>
      <div id="games" className="flex">
        <div className="gameBox">
          <a 
          target="_blank" 
          rel='noreferrer' 
          href="">
            <img 
            src=".\img\detroit.jpg" 
            alt="" /></a>
          <p>Detroit: Become Human</p>
        </div>
        <div className="gameBox">
          <a 
          target="_blank" 
          rel='noreferrer' 
          href="">
            <img 
            src=".\img\detroit.jpg" 
            alt="" /></a>
          <p>Detroit: Become Human</p>
        </div>
        <div className="gameBox">
          <a 
          target="_blank" 
          rel='noreferrer' 
          href="">
            <img 
            src=".\img\detroit.jpg" 
            alt="" /></a>
          <p>Detroit: Become Human</p>
        </div>
        <div className="gameBox">
          <a 
          target="_blank" 
          rel='noreferrer' 
          href="">
            <img 
            src=".\img\detroit.jpg" 
            alt="" /></a>
          <p>Detroit: Become Human</p>
        </div>
        <div className="gameBox">
          <a 
          target="_blank" 
          rel='noreferrer' 
          href="">
            <img 
            src=".\img\detroit.jpg" 
            alt="" /></a>
          <p>Detroit: Become Human</p>
        </div>
        <div className="gameBox">
          <a 
          target="_blank" 
          rel='noreferrer' 
          href="">
            <img 
            src=".\img\detroit.jpg" 
            alt="" /></a>
          <p>Detroit: Become Human</p>
        </div>
        
      </div>
    </section>
  </C.Games>
  )
  
}

export default Games