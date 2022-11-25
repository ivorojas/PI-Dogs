import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDogs } from '../actions'
import Card from './Card'
import NavBar from './NavBar'
import './Home.css'
import LandingDog from '../img/landing-dog.png'
import Paginado from './Paginado'



export default function Home() {

	const dispatch = useDispatch();
	//uso esto en lugar de usar el mapStateToProps, me trae todo con menos lineas
	const allDogs = useSelector(state=> state.dogs)
	//uso este use effect para traer todo cuando el componente se monta y me ahorro el mapDispatchToProps con el dispatch dentro
	useEffect(() => {
		dispatch(getDogs())
	}, [dispatch])

	const [currentPage, setCurrentPage] = useState(1)
	const [dogsPerPage, setDogsPerPage] = useState(8)
	const indexLastDog = currentPage * dogsPerPage
	const indexFirstDog = indexLastDog - dogsPerPage
	const currentDogs = allDogs.slice(indexFirstDog, indexLastDog)

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

  return (
    <div>
			<header>
			<NavBar />
			</header>
			<main>
        <div className='landing'>
					<h1>Los perros no son toda<br></br> tu vida, pero hacen tu<br></br> vida completa.</h1>
				<div className='dog-landing'>
					<img src={LandingDog} alt='Perro' width='70%'/>
				</div>
				</div>
				<h3 id='explora-razas'>Explora las Razas</h3>
		<div className='hr'>
			<hr/>
		</div>	
		<div id='filtro-button-container'>
			<button id='filtro-button'>Filtros {">"}</button>
		</div>
				<div className='dogs-container'>
				{
					currentDogs?.map(dog => {
						return (
							<div className='card-container'>
							{/* 	<Link to={'/home/ ' + dog.id} > */}
									<Card  name={dog.name} image={dog.image} temperament={dog.temperament} weight={dog.weight} />
							{/* 	</Link> */}
							</div>
						)
					})
				}
				<div id='container-paginado'> 
					<Paginado dogsPerPage={dogsPerPage}  allDogs={allDogs.length} paginate={paginate} />
				</div>
		
				</div>
				</main>
				<footer id='footer'>
				Designed & Built by Ivo Rojas
				</footer>
    </div>
  )
}
