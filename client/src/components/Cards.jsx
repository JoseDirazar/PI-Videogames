import Card from "./Card"
import Paginate from "./Paginate"
import { useSelector } from "react-redux/es/hooks/useSelector"
export default function Cards() {
    const { videogames, page } = useSelector((state) => state);

    const cantCharPerPage = 14;
    let desde = (numPage - 1) * cantCharPerPage;
    let hasta = numPage * cantCharPerPage;
    let cantPage = Math.floor(characters.length / cantCharPerPage);
  
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
                genres={(videogame.genres)}
                />)
            })}
        </div>
    </div>)
}