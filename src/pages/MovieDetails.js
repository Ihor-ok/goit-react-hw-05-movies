import fetchDetails from "components/services/getMovieDetails";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";



const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState([]);
    const [poster, setPoster] = useState('');
    const [userScore, setUserScor] = useState(0)
    
    useEffect(() => {
        fetchDetails(movieId).then(res => {
            console.log(res);
            setMovie(res.title);
            setOverview(res.overview);
            setGenres(res.genres);
            setPoster(res.poster_path);
            setUserScor(res.vote_average);
        })
    }, [movieId]) 

    const srcPosterr = `https://image.tmdb.org/t/p/w500/${poster}`
    const genresTitle = genres.map(genre => {
        return (genre.name)
    })

    return (
        <>
            <Link to='/'>Go back</Link>
            <h2>Movie: {movie}</h2>
            {userScore && <p>User Score: {userScore.toFixed(2)}%</p>}
            {poster && <img src={srcPosterr} alt={movie} height="500" ></img>}
            <p>Overview: {overview}</p>
            <p>Genres: {genresTitle.join(' ')}</p>
            
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet/>
        </>
        
    )
}

export default MovieDetails;