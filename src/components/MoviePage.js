import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import MovieContainer from './MovieContainer';

export class MoviePage extends Component {
     
    render() {
        return (
            <div>
                <SearchForm/>
                <MovieContainer/>
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)
