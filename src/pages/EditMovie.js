import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    movieAPI.getMovie(parseInt(id, 10))
      .then((response) => {
        this.setState({
          movie: response,
          status: 'ok',
        });
      });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then((response) => {
        this.setState({
          movie: response,
          status: 'ok',
          shouldRedirect: true,
        });
      });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    const { history } = this.props;

    if (shouldRedirect) {
      history.push('/');
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: {
    params: {
      id: PropTypes.string,
    },
  },
  history: {
    push: PropTypes.func,
  },
};

EditMovie.defaultProps = {
  match: {
    params: {
      id: '0',
    },
  },
  history: {
    push: undefined,
  },
};

export default EditMovie;
