import "./index.css"
import {Route, Routes} from "react-router-dom"
import Map from './routes/Map'


function App() {


     return(
      <>

         <Routes>
           <Route path="/" element={<Map/>} />
         </Routes>
         </>
     )
}

export default App
