const axios = require("axios");
const URL = "https://api.rawg.io/api/";

require("dotenv").config();
const { API_KEY } = process.env;

async function getVideogames() {
  try {
    let totalResponse = []
  
    for (let i = 1; i < 6; i++) {
      const { data } = await axios.get(`${URL}games?key=${API_KEY}&page=${i}`);
      totalResponse = [...totalResponse, ...data.results]
    }
    
    const mergedArray = [];
    
    totalResponse.forEach((videogame) => {
      const videogameBoilerplate = {
        id: videogame.id,
        nombre: videogame.name, 
        plataformas_padres: videogame.parent_platforms.map(p=>p.platform.name),
        plataformas: videogame.platforms.map(p => p.platform.name),
        imagen: videogame.background_image,
        fecha_lanzamiento: videogame.released,
        rating: videogame.rating,
        genres: videogame.genres.map(genre=>genre.name)
      };
      mergedArray.push(videogameBoilerplate);  
    });

    return mergedArray/* [mergedArray, genresArray] */;
  } catch (error) {
    throw new Error({error: error})
  }
}

async function getVideogameById(id) {
  try {
    const { data } = await axios.get(`${URL}games/${id}?key=${API_KEY}`);
    //console.log(data)
    const videogame = {
      id: data.id,
      nombre: data.name,
      descripcion: data.description,
      rating: data.rating,
      plataformas: data.platforms.map(platform => platform.platform.name).join(", "),
      imagen: data.background_image,
      fecha_lanzamiento: data.released,
      genres: data.genres.map(genre => genre.id).join(", ")
    }
    return videogame;
    
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

async function searchVideogame(videogameName) {
  try {
    const { data } = await axios.get(`${URL}games?search=${videogameName}&key=${API_KEY}`);
    //console.log(data.results)
    let arrayOfSearchGame = data.results.map(videogame => ({
      id: videogame.id,
      nombre: videogame.name,
      imagen: videogame.background_image,
      rating: videogame.rating,
      fecha_lanzamiento: videogame.released,
      plataformas: videogame.platforms.map(platforms => platforms.platform.name).join(", "),
      genres: videogame.genres.map(genre => genre.name).join(", "),
    }));  
    console.log(arrayOfSearchGame)
    //const genresOfFirstResult = data.results[0].genres.map(genre=>genre.id)
    return arrayOfSearchGame
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
