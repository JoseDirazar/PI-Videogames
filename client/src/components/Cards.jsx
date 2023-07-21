import Card from "./Card"
import Paginate from "./Paginate"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { filterByName, filterByGenres, filterByRating } from "../redux/actions";
import style from "./CSS/Cards.module.css"
export default function Cards() {
    const { videogames, page } = useSelector((state) => state);
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch()

    let videoGamesPage = videogames;
    let cantPage = 1
    if(videogames.length > 1) {
        const cantCharPerPage = 15;
        let desde = ( page - 1) * cantCharPerPage;
        let hasta = page * cantCharPerPage;

        cantPage = Math.floor(videogames.length / cantCharPerPage);
        videoGamesPage = videogames?.slice(desde, hasta)
    }
    
    function handleOrder(event) {
        dispatch(filterByName(event.target.value))
        //setAux(!aux)
        
    }
    function handleGenres(event) { 
            dispatch(filterByGenres(event.target.value))
             
    }

    function handleRating(event) {
        dispatch(filterByRating(event.target.value))
    }
  
    return(<div className={style.cardsContainer}>
        <div  className={style.filterOptions} >

        <label htmlFor="a-z">Ordenar A - Z </label>
        <select name="a-z" onChange={handleOrder}>
            <option value="A"> A - Z </option>
            <option value="D"> Z - A </option>
        </select>
        
        <label htmlFor="genero">Ordenar por Genero </label>
        <select name="genero" onChange={handleGenres}>
            <option value="Inide">Inide</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Casual">Casual</option>
            <option value="Simulation">Simulation</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Arcade">Arcade</option>
            <option value="Platformer">Platformer</option>
            <option value="Massively Multiplayer">Massively Multiplayer</option>
            <option value="Racing">Racing</option>
            <option value="Sports">Sports</option>
            <option value="Fighting">Fighting</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card</option>
        </select>

        <label htmlFor="rating">Ordenar por Rating </label>
        <select name="rating" onChange={handleRating}>
            <option value="ASC">Ascendente</option>
            <option value="DES">Descendente</option>
        </select>  

        </div>
        <div className={style.cards}>
            {videoGamesPage.map((videogame, index) => {
                return(<Card 
                    key={index}
                    id={videogame.id}
                    nombre={videogame.nombre}
                plataformas={videogame.plataformas}
                imagen={videogame.imagen}
                fecha_lanzamiento={videogame.fecha_lanzamiento}
                rating={videogame.rating}
                genres={videogame.genres}
                />)
            })}
        </div>
            <Paginate page={page} cantPage={cantPage} />
    </div>)
}