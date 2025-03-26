import "./index.css"
import Home from "./Home"
import {Route, Routes} from "react-router-dom"
import EngBuilding from "./api/engineering/EngBuilding"
import Map from './routes/Map'
function App() {
     return(
      <>

         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/eng" element={<EngBuilding/>} />
           <Route path="/map" element={<Map />} />
         </Routes>
         </>
     )
}

export default App
