import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

import style from "./CSS/NavBar.module.css";

export default function NavBar({ handleReload }) {
  
  return (
    <nav className={style.nav}>
      <div className={style.buttons}>
        <NavLink className={style.link} onClick={() => handleReload()} to="/home">
          Home
        </NavLink>
        <NavLink className={style.link} to="/about">
          About
        </NavLink>
        <NavLink className={style.link}  to={"/create"}>
          Create
        </NavLink>
        <SearchBar />
      </div>
      
    </nav>
  );
}