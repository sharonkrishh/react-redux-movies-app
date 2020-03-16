import React, { Component } from 'react';
import { connect } from  'react-redux';
import { fetchMovie } from '../actions/searchActions';

class Movie extends Component {

    componentDidMount(){
        console.log(this.props.match.params.id);
        this.props.fetchMovie(this.props.match.params.id);
    }
    render() {
        const { movie } =  this.props;
        console.log(movie);
        return (
            <div className="container">
                <div className="row">
                    <div className="col"><img src={movie.Poster} alt='Poster'/></div>
                    <div className="col">asdfasdf</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movie: state.moviesList.movie,
    loading: state.moviesList.loading,
})

const mapDispatchToProps = {
    fetchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);