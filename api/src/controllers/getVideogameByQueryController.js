const { searchVideogame } = require("../utils/endpoints")
const { Videogame } = require("../db")

async function getVideogameByQueryController(req,res) {
    try {
        const {name} = req.query
        const resultApi = await searchVideogame(name)
        
        return res.status(200).json(resultApi)
    } catch (error) {
        return res.status(404).json({error: error})
    }
    

}

module.exports = {
    getVideogameByQueryController
}