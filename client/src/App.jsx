import './App.css';
import LandingPage from "./components/LandingPage"
import Detail from "./components/Detail"
import Cards from "./components/Cards"
import CreateVideogameForm from "./components/CreateVideogameForm"
import NavBar from "./components/NavBar"
import About from "./components/About"
import RefreshRedirect from './components/RefreshRedirect';

import {Routes, Route, useLocation, useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { addVideogames, reload} from './redux/actions';
import axios from "axios"

function App() {
  
  const [accessHome, setAccessHome] = useState(false)
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function goingHome() {
    try {
      setAccessHome(true)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  
  const savedName = localStorage.getItem("searchName");

  useEffect(() => {
    if(!savedName) {
      dispatch(addVideogames())
    }
  }, [savedName])

  useEffect(() => {
    (async function inEffect() {
      try {
        await axios.get('http://localhost:3001/genres')
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  

  console.log(accessHome)

  return (
    <div className="App">
      {(location.pathname !== "/") && <NavBar /* savedName={savedName} */ />}
      <RefreshRedirect />
      <Routes>
        <Route path="/" element={<LandingPage goingHome={goingHome} />}/>
        <Route path="/home" element={<Cards  />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<CreateVideogameForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
