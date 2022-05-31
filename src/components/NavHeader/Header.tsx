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
          <li><a href="#home">Game Controllers</a></li>
          <li><a href="#games">Exclusive Games</a></li>
          <li><a href="#footer">Cupoms</a></li>
        </ul>
        <img src="./img/menu.png" alt="" className='menu-icon' onClick={handleClickMenu}/>
        </nav>
      </C.Header>
  )
}

export default Header