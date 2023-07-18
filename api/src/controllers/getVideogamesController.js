const { getVideogames } = require("../utils/endpoints")
const { Videogame, Genres } = require("../db")


async function getVideogamesController(req,res) {
    try {
        const videogamesArray = await getVideogames();
        
        /* const testingId = videogamesArray[0].id
        
        const seLlamoPreviamente = await Videogame.findByPk(testingId)
        if(seLlamoPreviamente){
            return res.status(200).json(videogamesArray)
        } else {
            const videogamesFromDb = await Videogame.bulkCreate(videogamesArray)
            
            for (let i = 0; i < videogamesFromDb.length; i++) {
                let videogame = videogamesFromDb[i];
                let genres = genresArray[i];
                await videogame.addGenres(genres);
            }
            
            const videogamesWithGenres = await Videogame.findAll({
                include: [
                  {
                    model: Genres,
                    attributes: ["nombre"],
                  },
                ],
              });
            return res.status(200).json({results: videogamesWithGenres})
        } */
        if(videogamesArray) {
            return res.status(200).json({results: videogamesArray})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(404).json({error: error.message})
    }
}

module.exports = {
    getVideogamesController
}