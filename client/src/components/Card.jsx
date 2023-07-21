import { NavLink } from "react-router-dom"
import style from "./CSS/Card.module.css"
export default function Card({id, nombre, plataformas, imagen, fecha_lanzamiento, rating, genres}){
/* id nombre plataformas imagen fecha_lanzamiento rating genres */

    return(<NavLink to={`/detail/${id}`} ><div className={style.cardContainer}>
        <img src={imagen} alt={nombre} className={style.imagen} />
        <h5 className={style.nombre}>{nombre}</h5>
        {/* <h3>Rating:{rating}</h3>
        <h3>Lanzamiento: {fecha_lanzamiento}</h3>
        <h3>Generos: {genres}</h3>
        <h5>Plataformas: {plataformas}</h5> */}
    </div></NavLink>)
}