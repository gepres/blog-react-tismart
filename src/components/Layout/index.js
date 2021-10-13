import React from 'react';
import Footer from '../Footer';
import SideBar from '../SideBar';
import './style.css'

const Layout = (props) => {
  return (
    <>
      <div className="Layout">
      {props.children}
      <SideBar />
      </div>
      <Footer />
    </>
  )
}

export default Layout;