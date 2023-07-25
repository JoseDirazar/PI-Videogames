import axios from "axios"
import style from "./CSS/Detail.module.css"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Detail() {
    
    const {id} = useParams()
    
    const [videogame, setVideogame] = useState({})
    
    useEffect(() => {
        async function inEffect() {
            try {
                const {data} = await axios.get(`http://localhost:3001/videogames/${id}`)
                console.log(data)
                if(data.plataformas.length > 1) data.plataformas = data.plataformas.join(", ")
                if(data.genres.length > 1) data.genres = data.genres.join(", ")
                if(data.desarrolladores.length > 1) data.desarrolladores = data.desarrolladores.join(", ")
                if(data.tiendas.length > 1) data.tiendas = data.tiendas.join(", ")
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
        <div className={style.detail} style={{
          backgroundImage: `url(${videogame.imagen_extra})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}>
          <h3>Id: {id}</h3>
          <h1 className={style.nombre}>{videogame.nombre}</h1>
          <img className={style.img} src={videogame.imagen} alt={videogame.nombre}></img>
          <p className={style.description} dangerouslySetInnerHTML={{ __html: videogame.descripcion }} />
        <div className={style.extraData}>
          <p>Plataformas: {videogame.plataformas}</p>
          <p>Generos: {videogame.genres}</p>
          <p>Rating: {videogame.rating}</p>
          <p>Lanzamiento: {videogame.fecha_lanzamiento}</p>
          <p>Desarrolladores: {videogame.desarrolladores}</p>
        </div>
        
        
        <div><p>Tiendas: {videogame.tiendas}</p></div>
      </div>
    )
    
}
/* id nombre plataformas imagen fecha_lanzamiento rating genres */