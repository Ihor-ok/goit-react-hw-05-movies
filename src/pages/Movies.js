import searchMovies from "components/services/searchMovies";
import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
    // useEffect(()=>{}, []) - HTTP запит якщо потрібен
    
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const movieTitle = searchParams.get('movie') ?? '';

    const location = useLocation();
    

    return (
        <div>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                searchMovies(movieTitle).then(res => {
                    setMovies(res);
                    console.log(res);
                });

            }}>
                <input type="text" value={movieTitle} onChange={evt =>  setSearchParams({movie: evt.target.value})} />
                <button type="submit">Search</button>
            </form>
           
            <ul>
                 {movies.map(mov => {
                     return (
                         <li key={mov.id}>
                             <Link to={`${mov.id}`} state={location}>{mov.title}</Link>;
                         </li>
                        ) 
                })}

            </ul>
           

        </div>
    )
};

export default Movies