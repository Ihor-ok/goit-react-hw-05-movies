import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchReviews from "./services/getReviews";


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews(movieId).then(res => {
 
            setReviews(res)
            
        })
    }, [movieId])


    if (reviews.length === 0) {
        setReviews([{
            content: `We don't have any reviews for this movie.`,
            id: 'qwer',
        }])
    }
    
    return (
        <>
            <ul>
                 {reviews.map(revie => {
                    return (
                 
                        <li key={revie.id}>
                            <p>{revie.author}</p>
                            <p>{revie.content}</p>
                        </li>        
                )
                })}
                
            </ul>
               

            
            
        </>
        
    )
};

export default Reviews;