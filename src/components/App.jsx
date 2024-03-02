import Movies from "pages/Movies"
import MovieDetails from "pages/MovieDetails"
import Home from "pages/Home"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Reviews from "./Reviews"
import Cast from "./Cast"

function App() {

       
    return (
    
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home></Home>}/>
            <Route path="movies" element={<Movies></Movies>}></Route>
            <Route path="movies/:movieId" element={ <MovieDetails/>}>
              <Route path="reviews" element={<Reviews></Reviews>}></Route>
              <Route path="cast" element={<ul><Cast></Cast></ul>}></Route>
            </Route>
          </Route>
          
        </Routes>

    )
  

}



export default App

