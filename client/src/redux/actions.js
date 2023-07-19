import {
  ADD_GAMES,
  FILTER_GENRES,
  FILTER_NAMES,
  FILTER_RATING,
  RESET,
  PREV,
  NEXT,
} from "./actionTypes";
import axios from "axios"

export const addVideogames = (videogames) => {
    return async function(dispatch) {
        try {
            const {data} = await axios.get("localhost:3001/videogames")
            return{
                type: ADD_GAMES,
                payload: data.results
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterByName(payload) {
    return {
        type: FILTER_NAMES,
        payload: payload
    }
}

export function filterByRating(payload) {
    return {
        type: FILTER_RATING,
        payload: payload
    }
}

export function filterByGenres(genre) {
    return {
        type: FILTER_GENRES,
        payload: genre
    }
} 
export function reset() {
  return {
    type: RESET,
  };
}

export function prev() {
  return {
    type: PREV,
  };
}
export function next() {
  return {
    type: NEXT,
  };
}

