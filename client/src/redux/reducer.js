import { ADD_GAMES, FILTER_GENRES, FILTER_NAMES, FILTER_RATING, RESET, PREV, NEXT } from "./actionTypes"
const initialState = {
    videogames: [],
    videogamesBackUp: [],
    page: 1,
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_GAMES:
            if(Array.isArray(payload)){
                return {
                    ...state,
                    videogames: payload,
                    videogamesBackUp: videogames
                }
            }
            return {
                ...state,
                videogames: [payload, ...state.videogames],
                videogamesBackUp: [payload, ...state.videogames]
            }
        case FILTER_NAMES:
            const filterGames = [...state.videogamesBackUp]
            return{ 
                ...state,
                videogames: payload === "A" ? filterGames.sort((a, z) => a.nombre - z.nombre) : filterGames.sort((a, z) => z.nombre - a.nombre)
                
            }
        case FILTER_RATING:
            return{
                ...state,
                videogames: payload === "DES" ? state.videogamesBackUp.sort((a, z) => z.rating - a.rating) : state.videogamesBackUp.sort((a, z) => a.rating - z.rating)
            }
        case FILTER_GENRES:
            return {
                ...state,
                videogames: state.videogamesBackUp.filter(videogame => videogame.genres.find(genre => genre.name === payload))
            }
        case RESET:
            return {
                ...state,
                videogames: state.videogamesBackUp
            }
        case PREV:
            return {
              ...state,
              page: state.page - 1,
            };
          case NEXT:
            return {
              ...state,
              page: state.page + 1,
            };
        
          default:
            return state;
    }
}

export default reducer;