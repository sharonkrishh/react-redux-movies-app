import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import MovieContainer from './MovieContainer';
import Spinner from './layout/Spinner';

class LandingPage extends Component {
   
    render() {
        const { loading } = this.props;
        console.log(loading);
        return (
            <React.Fragment>
                <SearchForm/>
                {loading ? <Spinner/> : <MovieContainer/>}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.moviesList.loading
})

export default connect(mapStateToProps)(LandingPage);