import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie, setLoading } from '../actions/searchActions';
import Spinner from './layout/Spinner';

class Movie extends Component {

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
    }
    render() {
        const { movie, loading } = this.props;
        console.log(movie);
        let movieDetail = (
            <div className="container movie-detail-wrapper">
                <div className="row movie-detail">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <img src={movie.Poster} alt='Poster' />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3>Movie: {movie.Title}</h3>
                        <ul className="list-group">
                            <li className="list-group-item"><h6>Year:</h6> {movie.Year}</li>
                            <li className="list-group-item"><h6>Rated:</h6> {movie.Rated}</li>
                            <li className="list-group-item"><h6>Released:</h6> {movie.Released}</li>
                            <li className="list-group-item"><h6>Runtime:</h6> {movie.Runtime}</li>
                            <li className="list-group-item"><h6>Genre:</h6> {movie.Genre}</li>
                            <li className="list-group-item"><h6>Director:</h6> {movie.Director}</li>
                            <li className="list-group-item"><h6>Actors:</h6> {movie.Actors}</li>
                            <li className="list-group-item"><h6>Imdb rating: </h6>{movie.imdbRating}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
        let content = loading ? <Spinner/> : movieDetail;
        return (
            <div className="movie-detail-panel">{content}</div>
        );
    }
}

const mapStateToProps = state => ({
    movie: state.moviesList.movie,
    loading: state.moviesList.loading,
})

const mapDispatchToProps = {
    fetchMovie,
    setLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);