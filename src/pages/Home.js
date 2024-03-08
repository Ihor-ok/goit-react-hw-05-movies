import fetchMovies from "components/services/getTrending ";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies().then(res => { setMovies(res) });
        
    }, []);

    const location = useLocation();

    if (movies.length !== 0) {
        return (
        <>
            <h1 className="title">Trending today</h1>
            <ul className="movie-list">
                 {movies.map(mov => {
                     return (
                         <li className="movie-item" key={mov.id} >
                             <Link className="movie-title" to={`movies/${mov.id}`} state={location}>{mov.title}</Link>;
                         </li>
                        ) 
                })}

            </ul>
        </>
    )
    }


    
}

export default Home;