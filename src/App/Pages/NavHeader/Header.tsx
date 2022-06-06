import React from 'react'
import * as C from '../NavHeader/styles'
import { useState } from 'react';
import 'animate.css';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const menuClassName = isOpen ? "openMenu" : "closedMenu";
  const handleClickMenu = () => { 
  setIsOpen(!isOpen);
  }

  return (
    <C.Header>
        <nav id="home">
        <img src="./img/logo.png" alt="" className='logo animate__animated animate__fadeInLeftBig' />
        <ul className={menuClassName}>
          <li className='animate__animated animate__fadeInRightBig'><a href="#home">Home</a></li>
          <li className='animate__animated animate__fadeInRightBig'><a href="#main">DualShock 4</a></li>
          <li className='animate__animated animate__fadeInRightBig'><a href="#games">Exclusive Games</a></li>
          <li className='animate__animated animate__fadeInRightBig'><a href="#discount">Discounts</a></li>
          <li className='animate__animated animate__fadeInRightBig'><a href="#news">Breaking News</a></li>
        </ul>
        <img src="./img/menu.png" alt="" className='menu-icon animate__animated animate__fadeInRightBig' onClick={handleClickMenu}/>
        </nav>
      </C.Header>
  )
}

export default Header