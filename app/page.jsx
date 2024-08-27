//import Link from "next/link";
'use client'

import styles from "/styles.module.css";
//import "@/styles/globals.css"; 
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesList from '../_components/MoviesList';
import MoviesHeader from '../_components/MoviesHeader';

/*
export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Headers with Next.js</h1>
        <hr className={styles.hr} />
        <p>
          The links below are examples of{" "}
          <Link
            href="https://nextjs.org/docs/app/api-reference/next-config-js/headers"
            legacyBehavior
          >
            { <span>
              custom headers
            </span> }
          </Link>{" "}
          added to your Next.js app.
        </p>
        <nav>
          <ul className={styles.list}>
            <li>
              <Link href="/about">
                Visit /about (it contains a X-About-Custom-Header)
              </Link>
            </li>
            <li>
              <Link href="/news/123">
                Visit /news/123 (it contains a X-News-Custom-Header)
              </Link>
            </li>
          </ul>
        </nav>
        <hr className={styles.hr} />
      </div>
    </div>
  );
}
*/

export default function App() {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

  //s=${searchValue} &i=tt3896198
	const getMoviesRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s='Titanic'&apikey=aa46d1d&`;

		const response = await fetch(url);
		const responseJson = await response.json();

    //setMovies(responseJson);
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		};
    console.log(responseJson);
	};

	useEffect(() => {
		getMoviesRequest(searchValue);
	}, []);

  
	return (
		<div className='container-fluid movie-app'>
			<div className='row align-items-center'>
				<MoviesHeader /> 
 			</div>
			<div className='row d-flex'>
				<MoviesList
					movies={movies}
				/>
			</div>

		</div>
	);
};