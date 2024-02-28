import fetchDetails from "components/services/getMovieDetails";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState()
    
    useEffect(()=>{fetchDetails(movieId).then(res => {console.log(res);})}, [movieId]) 
    return (
        <>
            <h2>Movie: {movieId}</h2>
            <Link to='/'>Go back</Link>
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