import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searching } from "../redux/actions";

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

  return (
    <div>
      <input type="search" value={name} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Buscar</button>
    </div>
  );
}
