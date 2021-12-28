import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card" className="container-movie-card">
        <h2>{ movie.title }</h2>
        <img src={ movie.imagePath } alt={ `Imagem do filme ${movie.title}` } />
        <p>{ movie.storyline }</p>
        <Link to={ `movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

MovieCard.defaultProps = {
  movie: [],
};

export default MovieCard;
