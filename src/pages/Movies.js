
import searchMovies from "components/services/searchMovies";
// import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";


import { useEffect, useState } from "react";

const Movies = () => {
    
    const [movies, setMovies] = useState(null);
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    const movieTitle = searchParams.get('movie') ?? '';

    const location = useLocation();

    // const backLinkLocationRef = useRef(location)
    // const { location, setLocation } = useMovie();
    
    // setLocation(useLocation());


    // console.log(backLinkLocationRef);

    const updateQueryString = evt => {
        if (evt.target.value === '') {
           return setSearchParams({});
        }

        setSearchParams({movie: evt.target.value})

    }

    const onSubmit = evt => {
        evt.preventDefault();
        searchMovies(movieTitle).then(res => {
            setMovies(res);
          
        })

    }
    
    useEffect(() => {
        if (searchParams) {
            searchMovies(movieTitle).then(res => {
            setMovies(res);
            
        })
            
        }
        
        if (searchParams.get('movie') === '') {
            setMovies('');
        }
        setMovies('');
        // setSearchParams({})
    }, [searchParams,movieTitle])

    return (
        <div>
            <form onSubmit={(evt) => { onSubmit(evt) }}>
                <input type="text" value={movieTitle} onChange={updateQueryString} />
                <button type="submit">Search</button>
            </form>
           
            <ul>
                 {movies && movies.map(mov => {
                     return (
                         <li key={mov.id}>
                             <Link to={`${mov.id}`} state={location} >{mov.title}</Link>;
                         </li>
                        ) 
                })}

            </ul>
           

        </div>
    )
};

export default Movies