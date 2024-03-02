import { useMovie } from "components/MovieContext";
import fetchDetails from "components/services/getMovieDetails";
import { useEffect, useState } from "react";
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
            console.log(res);
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

    const srcPosterr = `https://image.tmdb.org/t/p/w500/${poster}`
    const genresTitle = genres?.map(genre => {
        return (genre.name)
    })

    return (
        <>
           
            {isLoading && (<p>Loading...</p>)}

            {isDownloaded && <Link to={location.state}>Go back</Link>}
            {isDownloaded && <h2>Movie: {movie}</h2> }
            {isDownloaded && <p>User Score: {userScore.toFixed(2)}%</p>}
            {isDownloaded && <img src={srcPosterr} alt={movie} width="200" height="300" ></img>}
            {isDownloaded && <p>Overview: {overview}</p>}
            {isDownloaded && <p>Genres: {genresTitle.join(' ')}</p>}
            
            {isDownloaded && <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
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