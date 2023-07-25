import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searching } from "../redux/actions";
import style from './CSS/SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  let [name, setName] = useState("");

  const dispatch = useDispatch();

  function handleOnChange(event) {
    setName(event.target.value);
  
  }
  function handleOnClick() {
    dispatch(searching(name));
    setName("");
  }

  function handleOnKeyPress(event) {
    if (event.key === "Enter") {
      handleOnClick();
    }
  }

  return (
    <div>
      <input className={style.input} type="search" value={name} onChange={handleOnChange} onKeyDown={handleOnKeyPress} />
      <button className={style.button} onClick={handleOnClick} /* onClick={() => handleOnClick()} */>Buscar</button>
    </div>
  );
}
