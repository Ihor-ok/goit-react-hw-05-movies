import Dogs from "pages/Collection"
import DogDetails from "pages/DogDetails"
import Home from "pages/Home"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Subbreeds from "./Subbreeds"
import Gallery from "./Gallery/Gallery"

function App() {
       
    return (
    
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home></Home>}/>
            <Route path="dogs" element={<Dogs></Dogs>}></Route>
            <Route path="dogs/:dogId" element={<DogDetails></DogDetails>}>
              <Route path="subbreeds" element={<Subbreeds></Subbreeds>}></Route>
              <Route path="gallery" element={<Gallery></Gallery>}></Route>
            </Route>
          </Route>
          
        </Routes>

    )
  

}



export default App

