const { getVideogameById } = require("../utils/endpoints")
const { Videogame } = require("../db")

async function getVideogameByIdController(req,res) {
    try {
        const {idVideogame} = req.params

        const resultApi = await getVideogameById(idVideogame)
        
        const busquedaenDB = await Videogame.findByPk(idVideogame)
        
        if(busquedaenDB) {
            await Videogame.update(resultApi)
            return res.status(200).json(resultApi)
        } else {
            await Videogame.create(resultApi)
            return res.status(200).json(resultApi)
        }
        
    } catch (error) {
        return res.status(404).json({error: error})
    }
    

}

module.exports = {
    getVideogameByIdController
}