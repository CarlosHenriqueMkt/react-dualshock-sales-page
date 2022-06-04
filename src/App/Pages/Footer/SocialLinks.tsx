import React from 'react'
import * as C from './styles'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'

function SocialLinks() {
  return (
    <C.SocialLinks>
      <footer className="footer-distributed">

<div className="footer-right">

  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/PlayStationBR"><i className="facebook"><FaFacebookSquare /></i></a>
  <a target="_blank" rel="noreferrer" href="https://twitter.com/PlayStation_BR"><i className="twitter"><FaTwitterSquare /></i></a>
  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/playstation_br/"><i className="Instagram"><FaInstagramSquare /></i></a>

</div>

<div className="footer-left">

  <p className="footer-links">
    <a className="link-1" href="#home">Home</a>

    <a href="#main">DualShock 4</a>

    <a href="#games">Exclusive Games</a>

    <a href="#cupom">Cupoms</a>

    <a href="#news">Breaking News</a>
  </p>

  <p>Sony Interactive Entertainment LLC &copy; 2022</p>
</div>

</footer>
      </C.SocialLinks>
  )
}

export default SocialLinks