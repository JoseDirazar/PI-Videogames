const axios = require("axios");
const URL = "https://api.rawg.io/api/";

require("dotenv").config();
const { API_KEY } = process.env;

async function getVideogames() {
  try {
    const { data } = await axios.get(`${URL}games?key=${API_KEY}`);
    const mergedArray = [];
    //console.log(mergedArray)
    data.results.forEach((videogame) => {
      /* const platforms = []
           for (let j = 0; j < data.results.platforms.length; j++) {
               platforms.push(data.results.platforms[j].platform.name)
               
           } */
      const videogameBoilerplate = {
        id: videogame.id,
        nombre: videogame.name,
        descripcion: null,
        plataformas: null,
        imagen: videogame.background_image,
        fecha_lanzamiento: videogame.released,
        rating: videogame.rating,
        genres: videogame.genres.map(genre=>genre.id)
      };
      //console.log(videogame)
      mergedArray.push(videogameBoilerplate);
    });

    return mergedArray;
  } catch (error) {
    throw new Error(error)
  }
}

async function getVideogameById(id) {
  try {
    const { data } = await axios.get(`${URL}games/${id}?key=${API_KEY}`);
    //console.log(data)
     return {
        id: data.id,
        nombre: data.name,
        descripcion: data.description,
        rating: data.rating,
        plataformas: data.parent_platforms.map(platform => platform.platform.name),
        imagen: data.background_image,
        fecha_lanzamiento: data.released,
        genres: data.genres.map(genre =>  genre.id)
      };
    
  } catch (error) {
    throw new Error(error)
  }
}

async function searchVideogame(videogameName) {
  try {
    const { data } = await axios.get(`${URL}games?search=${videogameName}&key=${API_KEY}`);
    console.log(data.results)
    let videogame = data.results.map(videogame => ({
      id: videogame.id,
      nombre: videogame.name,
      imagen: videogame.background_image,
      rating: videogame.rating,
      fecha_lanzamiento: videogame.released,
      plataformas: videogame.platforms.map(platforms => platforms.platform.id),
      genres: videogame.genres.map(genre => genre.name),
    }));
    //console.log(videogame)
    return videogame
  } catch (error) {
    throw new Error(error)
  }
}

async function getGenres() {
  try {
    const { data } = await axios.get(`${URL}genres?key=${API_KEY}`);
    //console.log(data);
    const genresArray = [];
    data.results.forEach((genre) => {
      const genreBoilerplate = {
        id: genre.id,
        nombre: genre.name,
      };
      genresArray.push(genreBoilerplate);
    });
    //console.log(genresArray)
    return genresArray;
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getVideogames,
  getVideogameById,
  searchVideogame,
  getGenres,
};
