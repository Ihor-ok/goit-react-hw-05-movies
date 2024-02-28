import fetchMovies from "components/services/getTrending ";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies().then(res => { setMovies(res) });
        
    }, []);

    console.log(movies);

    return (
        <>
            <h1>Trending today</h1>
            <ul>
                 {movies.map(mov => {
                     return (
                         <li key={mov.id}>
                             <Link to={`movies/${mov.id}`}>{mov.title}</Link>;
                         </li>
                        ) 
                })}

            </ul>
        </>
    )
}

export default Home;