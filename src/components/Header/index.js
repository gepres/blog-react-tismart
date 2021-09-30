import React from "react";
import './style.css';
const Header = (props) => {
  return (
    <>
      <header className="header">
        <nav className="headerMenu">
          <a href="#">Inicio</a>
          <a href="#">Nosotros</a>
          <a href="#">Post</a>
          <a href="#">Contactenos</a>
        </nav>
      </header>
    </>
  )
}

export default Header;