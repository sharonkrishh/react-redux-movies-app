import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie, fetchMovies, setLoading } from '../actions/searchActions';

export class SearchForm extends Component {

    handleChnage = (e) => {
        console.log(e.target.value);
        this.props.searchMovie(e.target.value);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }

    render() {
        return (
            <div className="searchPanel">
                <div className="container">
                <h3><i className="fas fa-search"></i> Search your favourite movies</h3>
                <p>Here we have thousand of movies</p>
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
    fetchMovies,
    setLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
