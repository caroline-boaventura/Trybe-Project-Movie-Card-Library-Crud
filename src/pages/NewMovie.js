import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then((response) => {
        this.setState({
          movie: response,
          shouldRedirect: true,
        });
      });
  }

  render() {
    const { movie, shouldRedirect } = this.state;
    const { history } = this.props;

    if (shouldRedirect) {
      history.push('/');
    }

    return (
      <div data-testid="new-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

NewMovie.propTypes = {
  history: {
    push: PropTypes.func,
  },
};

NewMovie.defaultProps = {
  history: {
    push: undefined,
  },
};
export default NewMovie;
