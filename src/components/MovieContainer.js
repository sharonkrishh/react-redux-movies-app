import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

function MovieContainer(props) {

    console.log(props);
    const { movies } = props;
    let content = '';
    content = movies.Response === 'True' ? movies.Search.map((movie, index) => (
         <MovieCard key={index} movie={movie}/>
    )): <div className="NotFound-item"><h3>{movies.Error}</h3></div>; 

    return (
        <div className="movie-container">
            <div className="container">
                <div className="row">
                { content }
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = state => ({
    movies: state.moviesList.movies,
    loading: state.moviesList.loading
})
export default connect(mapStateToProps)(MovieContainer);

