import React from 'react'

function MovieCard(props) {
    return (
        <div className="col-md-3 col-sm-4 col-xs-6">
            <div className="movieCard card">
                <img src={props.movie.Poster} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5>{props.movie.Title}</h5>
                    <p>{props.movie.Year}</p>
                    <p>{props.movie.Type}</p>
                </div>
        </div>
        </div>
    )
}

export default MovieCard
