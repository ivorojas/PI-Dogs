import React from 'react'
import './LandingPage.css'
import LandingDog from '../img/landing-dog.png'
import logo from  '../img/logo.png'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div id='landing_container'>
      <div id='parte_izq' >
      <img src={logo}  width="300px"/>
      <div>
        <Link to="/home" >
        <button id='button_landing' >Ingresar</button>
        </Link>
  
      </div>

      </div>
      <div id='parte_der' >
      <img  src={LandingDog}   width="280px" />
      </div>

    
      </div>

  )
}
