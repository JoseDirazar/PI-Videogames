import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./CSS/NavBar.module.css";

export default function NavBar({  }) {
  const { pathname } = useLocation();
  return (
    <nav className={style.nav}>
      <div className={style.buttons}>
        <NavLink className={style.link} to="/home">
          Home
        </NavLink>
        <NavLink className={style.link} to="/about">
          About
        </NavLink>
        <NavLink className={style.link}  to={"/create"}>
          Create
        </NavLink>
      </div>
      <button onClick={logOut}>LogOut</button>
      {pathname === "/home" && <SearchBar />}
    </nav>
  );
}