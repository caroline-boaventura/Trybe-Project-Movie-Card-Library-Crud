import React, { Component } from 'react';

// import { MovieForm } from '../components';
// import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     status: 'loaging',
  //     shouldRedirect: false,
  //     movie: {},
  //   };

  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // componentDidMount() {
  //   const { match } = this.props;
  //   const { params } = match;
  //   const { id } = params;

  //   movieAPI.getMovie(id)
  //     .then((response) => {
  //       console.log(response);
  //       console.log(this.props);
  //       this.setState({
  //         movie: response,
  //         status: 'ok',
  //       });
  //     });
  // }

  // handleSubmit(updatedMovie) {
  //   movieAPI.updateMovie(updatedMovie)
  //     .then((response) => {
  //       this.setState({
  //         movie: response,
  //         status: 'ok',
  //         shouldRedirect: true,
  //       });
  //     });
  // }

  render() {
    // const { status, shouldRedirect, movie } = this.state;
    // const { history } = this.props;

    // if (shouldRedirect) {
    //   history.push('/');
    // }

    // if (status === 'loading') {
    //   // render Loading
    // }

    return (
      <div data-testid="edit-movie">
        <p>teste</p>
        {/* <MovieForm movie={ movie } onSubmit={ this.handleSubmit } /> */}
      </div>
    );
  }
}

// EditMovie.propTypes = {
//   match: {
//     params: {
//       id: PropTypes.number,
//     },
//   },
// };

// EditMovie.defaultProps = {
//   match: {
//     params: {
//       id: 0,
//     },
//   },
// };

export default EditMovie;
