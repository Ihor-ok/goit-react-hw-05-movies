import { Link, useSearchParams } from "react-router-dom";

const Dogs = () => {
    // useEffect(()=>{}, []) - HTTP запит якщо потрібен
    
    // const [searchParams, setSearchParams] = useSearchParams();
    // const dogId = searchParams.get('dogId') ?? '';
    

    return (
        <div>
            <form>
                <input type="text" />
                <button type="submit">Search</button>
            </form>
           
            {/* <ul>
                 {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => {
                     return (
                         <li key={dog}>
                             <Link to={`${dog}`}>{dog}</Link>;
                         </li>
                ) 
            })}

            </ul> */}
           

        </div>
    )
};

export default Dogs