require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/";

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
      };
      //console.log(videogame)
      mergedArray.push(videogameBoilerplate);
    });

    return mergedArray;
  } catch (error) {
    console.log(error);
  }
}

async function getVideogameById(id) {
  try {
    const { data } = await axios.get(`${URL}games/:${id}?key=${API_KEY}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function searchVideogame(videogameName) {
  try {
    const { data } = await axios.get(
      `${URL}games?search=${videogameName}&key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

async function getGenres() {
  try {
    const { data } = await axios.get(`${URL}genres?key=${API_KEY}`);
    console.log(data);
    const genresArray = [];
    data.results.forEach((genre) => {
      const genreBoilerplate = {
        id: genre.id,
        nombre: genre.name,
      };
      genresArray.push(genreBoilerplate);
    });
    return genresArray;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getVideogames,
  getVideogameById,
  searchVideogame,
  getGenres,
};
