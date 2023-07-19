import LandingPage from "./components/LandingPage"
import Detail from "./components/Detail"
import Cards from "./components/Cards"
import CreateVideogameForm from "./components/CreateVideogameForm"
import NavBar from "./components/NavBar"
import {Routes, Route, useLocation} from "react-router-dom"

import './App.css';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<CreateVideogameForm />} />
      </Routes>
    </div>
  );
}

export default App;
