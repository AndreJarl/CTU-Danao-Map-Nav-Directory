import "./index.css"
import {Route, Routes} from "react-router-dom"
import Map from "./routes/Map"
import Map3D from "./routes/Map3D"


function App() {


     return(
      <>

         <Routes>
           <Route path="/" element={<Map/>} />
           <Route path="/3d" element={<Map3D/>} />
         </Routes>
         </>
     )
}

export default App
