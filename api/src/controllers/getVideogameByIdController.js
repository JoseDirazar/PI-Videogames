const { getVideogameById } = require("../utils/endpoints")
const { Videogame, Genres} = require("../db")

async function getVideogameByIdController(req,res) {
    try {
        const {idVideogame} = req.params

        const [videogame, genres] = await getVideogameById(idVideogame)
        
        const busquedaenDB = await Videogame.findByPk(idVideogame)
        
        if(!busquedaenDB) {
            const videogameFromDb = await Videogame.create(videogame)
            await videogameFromDb.addGenres(genres)
            const videogamesWithGenres = await Videogame.findByPk(videogame.id,{
                include: [
                  {
                    model: Genres,  
                    attributes: ["nombre"],
                  },
                ],
              });
            return res.status(200).json(videogamesWithGenres)
            
        } else {        
            return res.status(200).json(videogame)
            
        }
        
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
    

}

module.exports = {
    getVideogameByIdController
}