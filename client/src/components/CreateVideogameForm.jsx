import { useState } from "react";
import validation from "./validations/validate";
import { postVideogame } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function CreateVideogameForm() {
  const dispatch = useDispatch();
  const { videogames } = useSelector((store) => store);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    id: 0,
    nombre: "",
    fecha_lanzamiento: "",
    plataformas: "",
    rating: 0,
    generos: "",
    imagen: "",
  });
  

  const [errors, setErrors] = useState({
    id: 0,
    nombre: "",
    fecha_lanzamiento: "",
    plataformas: [],
    rating: 0,
    generos: [],
    imagen: "",
  });

  function handleChange(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const existe = videogames.find(
      (videogame) => videogame.nombre === inputs.nombre
    );
    if (existe) {
      return alert(`El videojuego ${existe.nombre} ya existe en el servidor.`);
    }
    inputs.rating = Number(inputs.rating);
    inputs.id = Math.floor(Math.random() * 500) + 600000;
    inputs.generos = inputs.generos.split(", ")
    inputs.plataformas = inputs.plataformas.split(", ")
    
    console.log(inputs);
    dispatch(postVideogame(inputs));

    alert("Videojuego Creado!");
    navigate("/home");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          key="nombre"
          name="nombre"
          value={inputs.nombre}
          onChange={handleChange}
        />

        <label htmlFor="fecha_lanzamiento">Fecha de lanzamiento: </label>
        <input
          type="text"
          key="fecha_lanzamiento"
          name="fecha_lanzamiento"
          value={inputs.fecha_lanzamiento}
          onChange={handleChange}
        />

        <label htmlFor="plataformas">Plataformas: </label>
        <input
          type="text"
          key="plataformas"
          name="plataformas"
          value={inputs.plataformas}
          onChange={handleChange}
        />

        <label htmlFor="rating">Rating: </label>
        <input
          type="text"
          key="rating"
          name="rating"
          value={inputs.rating}
          onChange={handleChange}
        />

        <label htmlFor="generos">Generos: </label>
        <input
          type="text"
          key="generos"
          name="generos"
          value={inputs.generos}
          onChange={handleChange}
        />

        <label htmlFor="imagen">Imagen: </label>
        <input
          type="text"
          key="imagen"
          name="imagen"
          value={inputs.imagen}
          onChange={handleChange}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
