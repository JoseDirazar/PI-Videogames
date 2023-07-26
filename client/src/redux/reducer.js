import {
  RELOAD,
  ADD_GAMES,
  FILTER_GENRES,
  FILTER_NAMES,
  FILTER_RATING,
  RESET,
  PREV,
  NEXT,
  LOOKING,
  POST_VIDEOGAME,
} from "./actionTypes";

const initialState = {
  videogames: [],
  videogamesBackUp: [],
  page: 1,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_VIDEOGAME:
      return {
        ...state,
        videogames: [payload, ...state.videogames],
        videogamesBackUp: [payload, ...state.videogamesBackUp],
      };
    case ADD_GAMES:
      if (Array.isArray(payload)) {
        return {
          ...state,
          videogames: payload,
          videogamesBackUp: payload,
        };
      }
      return {
        ...state,
        videogames: [payload, ...state.videogames],
        videogamesBackUp: [payload, ...state.videogamesBackUp],
      };
    case FILTER_NAMES:
      const namesToFilter = state.videogames
      return {
        ...state,
        videogames:
          /* payload === "A"
            ? state.videogames.sort((a, z) => a.nombre - z.nombre)
            : state.videogames.sort((a, z) => z.nombre - a.nombre), */
            payload === "A"
            ? namesToFilter.sort((a, z) => a.nombre.localeCompare(z.nombre))
            : namesToFilter.sort((a, z) => z.nombre.localeCompare(a.nombre)),
        page: 1
      };
    case FILTER_RATING:
      const ratingToFilter = state.videogames
      return {
        ...state,
        videogames:
          payload === "DES"
            ? ratingToFilter.sort((a, z) => z.rating - a.rating)
            : ratingToFilter.sort((a, z) => a.rating - z.rating),
        page: 1
      };
    case FILTER_GENRES:
      let genresToFilter = [...state.videogamesBackUp]
      if(Array.isArray(payload)) {
        genresToFilter = genresToFilter.filter((videogame) => videogame.genres.find((genre) => genre === payload[0]))
        
        return {
          ...state,
          videogames: [...genresToFilter, ...payload[1]],
          page: 1
        }
      } else {
        
        return {
        ...state,
        videogames: genresToFilter.filter((videogame) =>
          videogame.genres.find((genre) => genre === payload)
        ),
        page: 1
      };
      }
    case LOOKING:
      return {
        ...state,
        videogames: payload,
        page: 1
      };
    case RESET:
      return {
        ...state,
        videogames: state.videogamesBackUp,
      };
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
    case RELOAD:
      return {
        ...state,
        videogames: state.videogamesBackUp,
      };
    default:
      return state;
  }
};

export default reducer;
