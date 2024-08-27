import React from 'react';

const MoviesHeader = () => {

    //console.log(movies);
	return (
        <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Movies application</h1>
            <p className="lead text-body-secondary">Movies application with movies from MMDb API </p>         
          </div>
        </div>
      </section>
	);
};

export default MoviesHeader;