import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searching } from "../redux/actions";
import style from './CSS/SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  let [name, setName] = useState("");

  const dispatch = useDispatch();

  function handleOnChange(event) {
    setName(event.target.value);
  
  }

  useEffect(() => {
    if(name.length > 1) {
      dispatch(searching(name.trim()))

    }
  }, [name])

  function handleOnClick() {
    dispatch(searching(name.trim()));
    setName("");
  }

  function handleOnKeyPress(event) {
    if (event.key === "Enter") {
      handleOnClick();
    }
  } 

  return (
    <div className={style.searchBar}>
      <input className={style.input} type="search" value={name} onChange={handleOnChange} onKeyDown={handleOnKeyPress} />
      <button className={style.button} onClick={handleOnClick} >Buscar</button>
    </div>
  );
}
