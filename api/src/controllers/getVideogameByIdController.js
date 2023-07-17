const { getVideogameById } = require("../utils/endpoints")
const { Videogame } = require("../db")

async function getVideogameByIdController(req,res) {
    try {
        const {idVideogame} = req.params
        const resultApi = await getVideogameById(idVideogame)
        
        return res.status(200).json(resultApi)
    } catch (error) {
        return res.status(404).json({error: error})
    }
    

}

module.exports = {
    getVideogameByIdController
}