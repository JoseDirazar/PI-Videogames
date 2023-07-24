import { NavLink } from "react-router-dom"
import style from "./CSS/Card.module.css"
export default function Card({id, nombre, plataformas, imagen, fecha_lanzamiento, rating, genres}){

    return(<NavLink to={`/detail/${id}`} ><div className={style.cardContainer}>
        <img src={imagen} alt={nombre} className={style.imagen} />
        <h1 className={style.nombre}>{nombre}</h1>
        {/* <p>Rating: {rating}</p>
        <p>Generos: {genres.join(", ")}</p> */}
        {/* <p>Lanzamiento: {fecha_lanzamiento}</p>
        <p>Generos: {genres}</p>
        <p>plataformas: {plataformas}</p> */}
    </div></NavLink>)
}