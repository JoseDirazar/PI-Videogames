import './App.css';
import LandingPage from "./components/LandingPage"
import Detail from "./components/Detail"
import Cards from "./components/Cards"
import CreateVideogameForm from "./components/CreateVideogameForm"
import NavBar from "./components/NavBar"
import About from "./components/About"

import {Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { addVideogames, reload} from './redux/actions';

function App() {
  
  const [accessHome, setAccessHome] = useState(false)
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function goingHome() {
    setAccessHome(true)
    navigate("/home")
  }

  useEffect(() => {
    
    !accessHome && navigate("/")
  },[accessHome])

  useEffect(() => {
    dispatch(addVideogames())
  }, [])

  useEffect(() => {
    (async function inEffect() {
      try {
        await axios.get('http://localhost/genres')
      } catch (error) {
        console.log(error)
      }
    })()
  })
  
  function handleReload() {
    dispatch(reload())
  }
  const {videogames} = useSelector
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar handleReload={handleReload} />}
      <Routes>
        <Route path="/" element={<LandingPage goingHome={goingHome} />}/>
        <Route path="/home" element={<Cards /* videogames={videogames} */ />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<CreateVideogameForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
