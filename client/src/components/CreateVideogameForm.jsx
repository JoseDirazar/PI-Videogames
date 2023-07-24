import { useState } from "react";
import { postVideogame } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import style from './CSS/CreateVideogameForm.module.css'
import validation from "./validations/validate";

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
    rating: "",
    generos: "",
    imagen: "",
    descripcion: ""
  });

  const [enableSubmit, setEnableSubmit] = useState(false)

  function handleChange(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });

    const checkingErrors = validation({
      ...inputs,
      [event.target.name]: event.target.value
    })

    setErrors(checkingErrors)

    const hasErrors = Object.values(checkingErrors).some(error => error !== "")
    setEnableSubmit(!hasErrors)
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
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <label htmlFor="nombre" className={style.label}>Nombre: </label>
        <input
          className={style.input}
          type="text"
          key="nombre"
          name="nombre"
          value={inputs.nombre}
          onChange={handleChange}
        />
        {errors.nombre ? <p className={style.errors}>{errors.nombre}</p> : <p></p>}

        <label htmlFor="fecha_lanzamiento" className={style.label}>Fecha de lanzamiento: </label>
        <input
          className={style.input}
          type="text"
          key="fecha_lanzamiento"
          name="fecha_lanzamiento"
          value={inputs.fecha_lanzamiento}
          onChange={handleChange}
        />
        {errors.fecha_lanzamiento ? <p className={style.errors}>{errors.fecha_lanzamiento}</p> : <p></p>}

        <label htmlFor="plataformas" className={style.label}>Plataformas: </label>
        <input
          className={style.input}
          type="text"
          key="plataformas"
          name="plataformas"
          value={inputs.plataformas}
          onChange={handleChange}
        />
        {errors.plataformas ? <p className={style.errors}>{errors.plataformas}</p> : <p></p>}

        <label htmlFor="rating" className={style.label}>Rating: </label>
        <input
          className={style.input}
          type="text"
          key="rating"
          name="rating"
          value={inputs.rating}
          onChange={handleChange}
        />
        {errors.rating ? <p className={style.errors}>{errors.rating}</p> : <p></p>}

        <label htmlFor="generos" className={style.label}>Generos: </label>
        <input
          className={style.input}
          type="text"
          key="generos"
          name="generos"
          value={inputs.generos}
          onChange={handleChange}
        />
        {errors.generos ? <p className={style.errors}>{errors.generos}</p> : <p></p>}

        <label htmlFor="imagen" className={style.label}>Imagen: </label>
        <input
          className={style.input}
          type="text"
          key="imagen"
          name="imagen"
          value={inputs.imagen}
          onChange={handleChange}
        />
        {errors.imagen ? <p className={style.errors}>{errors.imagen}</p> : <p></p>}

        <label htmlFor="descripcion" className={style.label}>Descripcion: </label>
        <textarea
        className={style.textarea}
          type="text"
          key="descripcion"
          name="descripcion"
          value={inputs.descripcion}
          onChange={handleChange}
        />
        {errors.descripcion ? <p className={style.errors}>{errors.descripcion}</p> : <p></p>}

        <button type="submit" className={style.button} disabled={!enableSubmit}>Crear</button>
      </form>
    </div>
  );
}
