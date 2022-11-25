import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import logo from  '../img/logo.png'
export default function NavBar() {
  return (
    <header>
			<div className='navBarContainer'>
				<NavLink to='/dog-create' >
          <button className='button-navbar'>
            Añadir Raza
          </button>
        </NavLink>
        <div id='logo'>
        <NavLink to='/' >
          <img src={logo}  alt='logo' height='80px'/>
        </NavLink>
        </div>
        <div>
        <input type='text' placeholder='busca una raza' id='input-nav' />
        <span class="material-symbols-rounded">
search
</span>
        </div>
      
			</div>
    </header>
  )
}
