import validation from "./validations/validate";

import { useState } from "react";
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
    descripcion: ""
  });
  

  const [errors, setErrors] = useState({
    nombre: "",
    fecha_lanzamiento: "",
    plataformas: "",
    rating: 0,
    generos: "",
    imagen: "",
    descripcion: ""
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
        {errors.nombre && <p>{errors.nombre}</p>}

        <label htmlFor="fecha_lanzamiento">Fecha de lanzamiento: </label>
        <input
          type="text"
          key="fecha_lanzamiento"
          name="fecha_lanzamiento"
          value={inputs.fecha_lanzamiento}
          onChange={handleChange}
        />
        {errors.fecha_lanzamiento && <p>{errors.fecha_lanzamiento}</p>}

        <label htmlFor="plataformas">Plataformas: </label>
        <input
          type="text"
          key="plataformas"
          name="plataformas"
          value={inputs.plataformas}
          onChange={handleChange}
        />
        {errors.plataformas && <p>{errors.plataformas}</p>}

        <label htmlFor="rating">Rating: </label>
        <input
          type="text"
          key="rating"
          name="rating"
          value={inputs.rating}
          onChange={handleChange}
        />
        {errors.rating && <p>{errors.rating}</p>}

        <label htmlFor="generos">Generos: </label>
        <input
          type="text"
          key="generos"
          name="generos"
          value={inputs.generos}
          onChange={handleChange}
        />
        {errors.generos && <p>{errors.generos}</p>}

        <label htmlFor="imagen">Imagen: </label>
        <input
          type="text"
          key="imagen"
          name="imagen"
          value={inputs.imagen}
          onChange={handleChange}
        />
        {errors.imagen && <p>{errors.imagen}</p>}

        <label htmlFor="descripcion">Descripcion: </label>
        <textarea
          type="text"
          key="descripcion"
          name="descripcion"
          value={inputs.descripcion}
          onChange={handleChange}
        />
        {errors.descripcion && <p>{errors.descripcion}</p>}

        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
