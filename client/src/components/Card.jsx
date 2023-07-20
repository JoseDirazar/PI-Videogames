import { NavLink } from "react-router-dom"

export default function Card({id, nombre, plataformas, imagen, fecha_lanzamiento, rating, genres}){
/* id nombre plataformas imagen fecha_lanzamiento rating genres */

    return(<NavLink to={`/detail/${id}`} ><div className="card">
        <img src={imagen} alt={nombre} className="logo" />
        <h2>{nombre}</h2>
        <h3>Rating:{rating}</h3>
        <h3>Lanzamiento: {fecha_lanzamiento}</h3>
        <h3>Generos: {genres}</h3>
        <h5>Plataformas: {plataformas}</h5>
    </div></NavLink>)
}