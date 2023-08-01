import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searching } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import style from './CSS/SearchBar.module.css'

export default function SearchBar(/* { savedName } */) {
  let [name, setName] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  function handleOnChange(event) {
    setName(event.target.value);
    localStorage.setItem("searchName", event.target.value);
  }

  const savedName = localStorage.getItem("searchName");

  useEffect(() => {
    if(savedName){
      setName(savedName);
    }    
  }, [savedName]);
  
  useEffect(() => {
    if(name.length > 1) {
      dispatch(searching(name.trim()))
    }
  }, [name])

  

  /* function handleOnClick() {
    dispatch(searching(name.trim()));
    setName("");
    localStorage.removeItem("searchName");
  } */

  function handleOnKeyPress(event) {
    if (event.key === "Enter") {
      handleOnClick();
      setName("");
    localStorage.removeItem("searchName");
    }
  } 

  return (
    <div className={style.searchBar}>
      Search: 
      <input className={style.input} type="search" value={name} onChange={handleOnChange} onKeyDown={handleOnKeyPress} />
     
    </div>
  );
}
