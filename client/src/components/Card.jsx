import { NavLink } from "react-router-dom"
import style from "./CSS/Card.module.css"
export default function Card({id, nombre, plataformas, imagen, fecha_lanzamiento, rating, genres}){
    if(1 === 2)
    return(<NavLink to={`/detail/${id}`} className={style.navLink}><div className={style.cardContainer}>
        <img src={imagen} alt={nombre} className={style.imagen} />
        <h1 className={style.nombre}>{nombre}</h1>
        
    </div></NavLink>)
}