import "./index.css"
import Home from "./Home"
import {Route, Routes} from "react-router-dom"
import EngBuilding from "./api/engineering/EngBuilding"

function App() {
     return(
      <>

         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/eng" element={<EngBuilding/>} />

         </Routes>
         </>
     )
}

export default App
