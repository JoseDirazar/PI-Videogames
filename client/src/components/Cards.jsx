import Card from "./Card"
import Paginate from "./Paginate"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { filterByName, filterByGenres, filterByRating } from "../redux/actions";
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
        return
    }
    function handleFilter(event) {
        if(event.target.value === "Generos") {
            dispatch(filterByGenres(event.target.value))
            return 
        } else {
            dispatch(filterByRating(event.target.value))
            return
        }
    }
  
    return(<div className="cardsContainer">
        <div /* className={style.filterOptions} */>
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Rating">Rating</option>
            <option value="Generos">Generos</option>
        </select> 
        </div>
        <Paginate page={page} cantPage={cantPage} />
        <div className="cards">
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
    </div>)
}