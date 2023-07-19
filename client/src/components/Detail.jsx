import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from "./CSS/Detail.module.css"
export default function Detail() {
    
    const {id} = useParams()
    
    const [videogame, setVideogame] = useState({})
    
    useEffect(() => {
        async function inEffect() {
            try {
                const {data} = await axios.get(`localhost:3001/videogames/${id}`)
                if(data.nombre) {
                    setVideogame(data)
                } 
            } catch (error) {
                
            }
        }
        inEffect()
        return setVideogame({});
    }, [id]);
    
    
    return (
        <div classnombre={style.detail}>
        <div classnombre={style.text}>
          <h3>Id: {id}</h3>
          <h1>{videogame.nombre}</h1>
          <h2>Plataformas: {videogame.plataformas}</h2>
          <p>Generos: {videogame.genres}</p>
          <p>Rating: {videogame.rating}</p>
          <p>Lanzamiento: {videogame.fecha_lanzamiento}</p>
        </div>
        <div classnombre={style.img}>
          <img src={videogame.imagen} alt={videogame.nombre}></img>
        </div>
      </div>
    )
    
}
/* id nombre plataformas imagen fecha_lanzamiento rating genres */