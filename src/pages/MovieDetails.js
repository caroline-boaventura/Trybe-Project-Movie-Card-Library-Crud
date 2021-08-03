import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };

    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    movieAPI.getMovie(id)
      .then((response) => {
        this.setState({
          movie: response,
          loading: false,
        });
      });
  }

  deleteMovie(event) {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    event.preventDefault();

    movieAPI.deleteMovie(id)
      .then((response) => {
        this.setState({
          movie: response,
          shouldRedirect: true,
        });
      });
  }

  render() {
    const { movie, loading, shouldRedirect } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { history } = this.props;

    if (shouldRedirect) {
      history.push('/');
    }

    if (loading === true) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link onClick={ this.deleteMovie } to="/">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: {
    params: {
      id: PropTypes.number,
    },
  },
  history: {
    push: PropTypes.func,
  },
};

MovieDetails.defaultProps = {
  match: {
    params: {
      id: 0,
    },
  },
  history: {
    push: undefined,
  },
};

export default MovieDetails;
