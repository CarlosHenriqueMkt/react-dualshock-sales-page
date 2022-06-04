import React from 'react'
import * as C from '../NavHeader/styles'
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const menuClassName = isOpen ? "openMenu" : "closedMenu";
  const handleClickMenu = () => { 
  setIsOpen(!isOpen);
  }

  return (
    <C.Header>
        <nav id="home">
        <img src="./img/logo.png" alt="" className='logo' />
        <ul className={menuClassName}>
          <li><a href="#home">Home</a></li>
          <li><a href="#main">DualShock 4</a></li>
          <li><a href="#games">Exclusive Games</a></li>
          <li><a href="#discount">Discounts</a></li>
          <li><a href="#news">Breaking News</a></li>
        </ul>
        <img src="./img/menu.png" alt="" className='menu-icon' onClick={handleClickMenu}/>
        </nav>
      </C.Header>
  )
}

export default Header