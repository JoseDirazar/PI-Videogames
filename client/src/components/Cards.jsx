import Card from "./Card"
import Paginate from "./Paginate"
import { useSelector } from "react-redux"
export default function Cards() {
    const { videogames, page } = useSelector((state) => state);

    const cantCharPerPage = 15;
    let desde = ( page - 1) * cantCharPerPage;
    let hasta = page * cantCharPerPage;
    let cantPage = 1
    if(videogames.length > 1) {

        cantPage = Math.floor(videogames.length / cantCharPerPage);
    }
  
    const videoGamesPage = videogames?.slice(desde, hasta);
  
    return(<div className="cardsContainer">
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