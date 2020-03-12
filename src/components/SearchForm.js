import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie, fetchMovies } from '../actions/searchActions';

export class SearchForm extends Component {

    handleChnage = (e) => {
        console.log(e.target.value);
        this.props.searchMovie(e.target.value);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                <h1 className="display-4"><i className="fas fa-search"></i> Search your favourite movies</h1>
                <p className="lead">Here we have thousand of movies</p>
                <hr className="my-4"/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search movies Tv series..."
                        onChange={this.handleChnage}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Search</button>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

        text: state.moviesList.text
})
const mapDispatchToProps = {
    searchMovie,
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
