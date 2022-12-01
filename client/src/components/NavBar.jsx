import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogByName } from '../actions'
import './NavBar.css'
import logo from  '../img/logo.png'
export default function NavBar() {

  const dispatch = useDispatch();
  const [name, setName] = useState("")

  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getDogByName(name))
  }

  return (
    <header>
			<div className='navBarContainer'>
				<NavLink to='/create' >
          <button className='button-navbar'>
            Añadir Raza
          </button>
        </NavLink>
        <div id='logo'>
        <NavLink to='/' >
          <img src={logo}  alt='logo' height='80px'/>
        </NavLink>
        </div>
        <div className='input-container'>
        <input type='text' placeholder='busca una raza' id='input-nav' onChange={(e) => handleInputChange(e)} />
        <button type='submit' onClick={(e) => handleSubmit(e)} id="button-lupa" >
          <span className="material-symbols-rounded">
            search
          </span>
        </button> 
        </div>
      
			</div>
    </header>
  )
}
