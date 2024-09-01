
import styles from "/styles.module.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesList from '../_components/MoviesList';
import MoviesHeader from '../_components/MoviesHeader';
import Search from "../_components/Search";

export default async function App({searchParams}) {
    //const searchValue = 'Titanic';
    const s = searchParams?.s || '';
	const url = `http://www.omdbapi.com/?s=${s}&apikey=aa46d1d&`;
	const response = await fetch(url);
	const responseJson = await response.json();
    const movies = responseJson?.Search || [];	

	return (
		<div className='container-fluid movie-app'>
			<div className='row align-items-center'>
				<MoviesHeader /> 
 			</div>
      		<Search />
			<div className='row d-flex'>
				<MoviesList
					movies={movies}
				/>
			</div>
		</div>
	);
};