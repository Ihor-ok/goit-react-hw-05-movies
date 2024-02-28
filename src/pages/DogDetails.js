import { Link, Outlet, useParams } from "react-router-dom";

const DogDetails = () => {
    const { dogId } = useParams();
    
    // useEffect(()=>{}, []) - HTTP запит якщо потрібен
    return (
        <>
            <h2>DogDetails: {dogId}</h2>
            <Link to='/dogs'>Go bek to pages Collection</Link>
            <ul>
                <li>
                    <Link to="subbreeds">Sabbreeds</Link>
                </li>
                <li>
                    <Link to="gallery">Gallery</Link>
                </li>
            </ul>
            <Outlet/>
        </>
        
    )
}

export default DogDetails;