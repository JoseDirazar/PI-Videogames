const { getVideogames } = require("../utils/endpoints");
const { Videogame, Genres } = require("../db");

async function getVideogamesController(req, res) {
  try {
    const videogamesArray = await getVideogames();

    let videogamesWithGenres = await Videogame.findAll({
      include: [
        {
          model: Genres,
          attributes: ["nombre"],
        },
      ],
    });

    console.log(videogamesWithGenres);

    if (videogamesWithGenres) {
      videogamesWithGenres = videogamesWithGenres.map(function (videogame) {
        return {
          ...videogame.dataValues,
          genres: videogame.dataValues.Genres.map((genre) => genre.nombre),
        };
      });
      return res
        .status(200)
        .json({ results: [...videogamesWithGenres, ...videogamesArray] });
    }
    console.log(videogamesArray);
    return res.status(200).json({ results: videogamesArray });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: error.message });
  }
}

module.exports = {
  getVideogamesController,
};
