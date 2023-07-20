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
      const namesToFilter = state.videogamesBackUp
      return {
        ...state,
        videogames:
          /* payload === "A"
            ? state.videogames.sort((a, z) => a.nombre - z.nombre)
            : state.videogames.sort((a, z) => z.nombre - a.nombre), */
            payload === "A"
            ? namesToFilter.sort((a, z) => a.nombre.localeCompare(z.nombre))
            : namesToFilter.sort((a, z) => z.nombre.localeCompare(a.nombre)),
      };
    case FILTER_RATING:
      const ratingToFilter = state.videogamesBackUp
      return {
        ...state,
        videogames:
          payload === "Rating"
            ? ratingToFilter.sort((a, z) => z.rating - a.rating)
            : ratingToFilter.sort((a, z) => a.rating - z.rating),
      };
    case FILTER_GENRES:
      const genresToFilter = state.videogamesBackUp
      return {
        ...state,
        videogames: genresToFilter.filter((videogame) =>
          videogame.genres.find((genre) => genre.name === payload)
        ),
      };
    case LOOKING:
      return {
        ...state,
        videogames: payload,
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
