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
            <h1>Trending today</h1>
            <ul>
                 {movies.map(mov => {
                     return (
                         <li key={mov.id}>
                             <Link to={`movies/${mov.id}`} state={location}>{mov.title}</Link>;
                         </li>
                        ) 
                })}

            </ul>
        </>
    )
    }


    
}

export default Home;