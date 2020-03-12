import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

function MovieContainer(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                {
                    props.movies.map( (movie, index) => {
                        return <MovieCard key={index} movie={movie}/>
                    })
                }
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = state => ({
    movies: state.moviesList.movies,
    loading: state.loading
})
export default connect(mapStateToProps)(MovieContainer);

