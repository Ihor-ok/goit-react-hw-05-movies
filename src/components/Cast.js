import { useEffect, useState } from "react";
import fetchCast from "./services/getCast";
import { useParams } from "react-router-dom";

const Cast = () => {
    const { movieId } = useParams();
    const [casts, setCasts] = useState([]);

    let srcPosterr =  `https://image.tmdb.org/t/p/w500/`

    useEffect(() => {
        fetchCast(movieId).then(res => {
            console.log(res);
            setCasts(res);
        })
    }, [movieId])

    return (
        <>
            {casts.map(cast => {
                return (
                    
                        <li key={cast.id}>
                            <img src={srcPosterr + cast.profile_path} alt={cast.name} width="200" height="300"></img>
                            <p>{cast.name}</p>
                            <p>Character: {cast.character}</p>
                        </li>
                
                    
                    
            ) }) }
        </>
    )

};

export default Cast