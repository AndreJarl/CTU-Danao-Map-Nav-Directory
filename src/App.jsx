import "./index.css"
import Home from "./Home"
import {Route, Routes} from "react-router-dom"
import EngBuilding from "./api/engineering/EngBuilding"
import Map from './routes/Map'
import Sidebar from './routes/Sidebar'

function App() {


     return(
      <>

         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/eng" element={<EngBuilding/>} />
           <Route path="/map" element={<Map />} />
           <Route path="/sidebar" element={<Sidebar />} />
         </Routes>
         </>
     )
}

export default App
