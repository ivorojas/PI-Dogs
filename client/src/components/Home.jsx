import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, getTemperaments, filterDogsByTemperaments, filterBreeds, orderByName, orderByWeight } from '../actions'
import Card from './Card'
import NavBar from './NavBar'
import './Home.css'
import LandingDog from '../img/landing-dog.png'
import LinkedinLogo from '../img/linkedin-icon-logo.png'
import GithubLogo from '../img/logotipo-de-github.png'
import Paginado from './Paginado'



export default function Home() {

	const dispatch = useDispatch();
	//uso esto en lugar de usar el mapStateToProps, me trae todo con menos lineas
	const allDogs = useSelector(state=> state.dogs)
	const allTemperaments = useSelector(state=> state.temperaments)
	//uso este use effect para traer todo cuando el componente se monta y me ahorro el mapDispatchToProps con el dispatch dentro
	useEffect(() => {
		dispatch(getDogs())
		dispatch(getTemperaments())
	}, [dispatch])

	const [currentPage, setCurrentPage] = useState(1)
	const [dogsPerPage, setDogsPerPage] = useState(8)
	const indexLastDog = currentPage * dogsPerPage
	const indexFirstDog = indexLastDog - dogsPerPage
	const currentDogs = allDogs.slice(indexFirstDog, indexLastDog)


	
	const [isActive, setIsActive] = useState(false)


	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const handleFilterTemperaments = (e) => {
	
		dispatch(filterDogsByTemperaments(e.target.value))
	}

	const handleFilterBreeds = (e) => {

		dispatch(filterBreeds(e.target.value))
	}

	
	const handleFilterByName = (e) => {

		dispatch(orderByName(e.target.value)) 
	}

	const handleFilterByWeight = (e) => {

		dispatch(orderByWeight(e.target.value))
	}

	let aux = 0;
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
			<button id='filtro-button' onClick={() => setIsActive(!isActive)} >Filtros {">"}</button>
			<div className='list-dropdown'>
			{
				isActive && ( <div className='inner-list-dropdown' >
									<select onChange={e => {handleFilterBreeds(e)}} >
					<option value="todos-los-perros">Todos los perros</option>
					<option value="api">Api</option>
					<option value="db">Db</option>
				</select>
				<select onChange={(e) => { handleFilterTemperaments(e)}} >
					<option value="todos-los-temperamentos">Todos los temperamentos</option>
					{
						allTemperaments?.map(t => {
							return (
								<option value={t} key={aux++}  >{t}</option>
							)
						})
					}
				</select>
				<select onChange={e => handleFilterByWeight(e)} >
					<option value="mayor-peso">Mayor peso</option>
					<option value="menor-peso">Menor peso</option>
				</select>
				<select onChange={e => {handleFilterByName(e)}}>
					<option value="a-z">A - Z</option>
					<option value="z-a">Z - A</option>
				</select>
		
				</div>  )
			}

			</div>
		</div>
				<div className='dogs-container'>
				{
					currentDogs?.map(dog => {
						return (
							<div className='card-container'  key={aux++}>
							{/* 	<Link to={'/home/ ' + dog.id} > */}
									<Card  
									name={dog.name} image={dog.image} 
									temperament={dog.temperament} weight_min={dog.weight_min} id={dog.id}
									weight_max={dog.weight_max} />
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
				<footer>
					<div  id='footer-home'>
					Designed & Built by Ivo Rojas
			<a href='https://www.linkedin.com/in/ivo-rojas-753a95239/'  target="_blank">
			<button className='button-footer'>
					<img src={LinkedinLogo} alt='linkedin-logo' width='30px'/>
					</button>
			</a>
		
			
			<a href='https://github.com/ivorojas'  target="_blank">
			<button className='button-footer' >
			<img src={GithubLogo} alt='github-logo' width='25px'/>
					</button>
			</a>
					</div>

		
				</footer>
    </div>
  )
}
