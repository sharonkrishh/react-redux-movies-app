import React, { Component } from 'react';
import SearchForm from './SearchForm';
import MovieContainer from './MovieContainer';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <SearchForm/>
                <MovieContainer/>
            </div>
        );
    }
}

export default LandingPage;