import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import buscarBlog from '../../assets/iconos/icon_search.png'
import './style.css'

const NavBar = (props) => {
  const [busqueda, setbusqueda] = useState(false)
  const mostrarBusqueda = () => {
    setbusqueda(true)
  }
  const inputVisible = busqueda ? '' : 'none'


  return (
    <div className="NavBar">
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/nosotros">Nosotros</NavLink></li>
        <li><NavLink to="/post">Post</NavLink></li>
        <li><NavLink to="/contactenos">Contactenos</NavLink></li>
      </ul>
      <div>
        <form>
          <input type="text" placeholder="Buscar..." style={{display: inputVisible}} />
          <img src={buscarBlog} width="20" height="20" alt="Buscar" onClick={mostrarBusqueda} />
        </form>
      </div>
    </div>
  )
}

export default NavBar;