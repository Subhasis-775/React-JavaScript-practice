import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './styles.css'
import Navbar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
const App=()=>{
  return(
    <Router>
      <Navbar/>
      <div className="page-content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App;