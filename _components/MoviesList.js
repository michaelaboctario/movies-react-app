import React from 'react';

const MoviesList = ({movies}) => {

    //console.log(movies);
	return (
		<>
			{movies.map(movie => { 
				//console.log(movie);
				return ( 
					<div className="col-sm-6 col-md-4" key={movie.imdbID}>
						<div className='card justify-content-start m-3'>
							<img src={movie.Poster} alt='movie'></img>
							<p className='card-text m-3'>{movie.Title}</p>
						</div>
					</div>
					
				)
			})
			}
		</>
	);
};

export default MoviesList;