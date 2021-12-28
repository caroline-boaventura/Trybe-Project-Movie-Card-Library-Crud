import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import './MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => {
        this.setState({
          movies: response,
          loading: false,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading === true) return <Loading />;

    // Render Loading here if the request is still happening

    return (
      <div className="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
