const { getVideogameById } = require("../utils/endpoints")
const { Videogame, Genres} = require("../db")

async function getVideogameByIdController(req,res) {
    try {
        const {idVideogame} = req.params
        if(!idVideogame) return res.status(404).json({error: 'No Params Recived'})
        const videogame= await getVideogameById(idVideogame)
        
        const busquedaenDB = await Videogame.findByPk(idVideogame, {
            include: [
              {
                model: Genres,  
                attributes: ["nombre"],
              },
            ],
          })
        
        if(busquedaenDB) {
            //const videogameFromDb = await Videogame.create(videogame)
            //await videogameFromDb.addGenres(genres)
            /* const videogamesWithGenres = await Videogame.findByPk(videogame.id,{
                include: [
                  {
                    model: Genres,  
                    attributes: ["nombre"],
                  },
                ],
              }); */
            return res.status(200).json(busquedaenDB)
            
        } 
        if(!busquedaenDB){        
            return res.status(200).json(videogame)    
        }
        return res.status(404).json({error: 'El Videojuego con el ID ingresado no existe.'})
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
    

}

module.exports = {
    getVideogameByIdController
}