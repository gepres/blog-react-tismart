import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import NavBar from '../NavBar';

const Menu = (props) => {
  return (
    <div className="Menu">
      <Logo />
      <NavBar />
      {/* <Card>
      </Card> */}
    </div>
  )
}

export default Menu;