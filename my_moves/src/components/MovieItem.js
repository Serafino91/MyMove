const MovieItem = ({movie}) => {
    return (
        <div className="card col-md-3 col-lg-6"  style={{ width: "18rem" }}>
            <img className="card-img-top" src={movie.Poster} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <a href={'/movies/'+movie.imdbID} className="btn btn-primary">
                    VIEW DETAIL
                </a>
            </div>
        </div>

    );
}
export default MovieItem