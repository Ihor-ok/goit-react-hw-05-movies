import { useMovie } from "components/MovieContext";
import fetchDetails from "components/services/getMovieDetails";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";



const MovieDetails = () => {
    
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState([]);
    const [poster, setPoster] = useState('');
    const [userScore, setUserScor] = useState(0);
   
    const {isLoading, isDownloaded, isNotLoading, downloaded} = useMovie();
    
    useEffect(() => {
        fetchDetails(movieId).then(res => {
           
            setMovie(res.title);
            setOverview(res.overview);
            setGenres(res.genres);
            setPoster(res.poster_path);
            setUserScor(res.vote_average);
            isNotLoading();
            downloaded();
            
        })
    }, [movieId, isNotLoading, downloaded]);
    
    const location = useLocation();
    const backLinkLocationRef = useRef(location);

    const srcPosterr = `https://image.tmdb.org/t/p/w500/${poster}`
    const genresTitle = genres?.map(genre => {
        return (genre.name)
    })

    return (
        <>
           
            {isLoading && (<p>Loading...</p>)}
            {isDownloaded && <Link to={backLinkLocationRef.current.state}>Go back</Link>}
            <div className="card" style={{}}>
                {isDownloaded && <img className="card-img-top" src={srcPosterr} alt={movie} width="200px" height="300px" ></img>}
                <div className="card-body">
                    {isDownloaded && <h2 className="card-title">Movie: {movie}</h2>}
                    {isDownloaded && <p className="card-text">User Score: {userScore.toFixed(2)}%</p>}
                    {isDownloaded && <p className="card-text">Overview: {overview}</p>}
            {isDownloaded && <p className="card-text">Genres: {genresTitle.join(' ')}</p>}
                </div>
            </div>
  
                        
            {isDownloaded && <ul className="btn-primary-cast-reviews">
                <li>
                    <Link className="btn btn-primary" to="cast">Cast</Link>
                </li>
                <li>
                    <Link className="btn btn-primary" to="reviews">Reviews</Link>
                </li>
            </ul>}





            {/* {movie && <Link to={location.state}>Go back</Link>}
            {movie && <h2>Movie: {movie}</h2> }
            {userScore && <p>User Score: {userScore.toFixed(2)}%</p>}
            {poster && <img src={srcPosterr} alt={movie} height="500" ></img>}
            {overview && <p>Overview: {overview}</p>}
            {movie && <p>Genres: {genresTitle.join(' ')}</p>}
            
            {movie && <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>} */}
            <Outlet/>
        </>
        
    )
}

export default MovieDetails;