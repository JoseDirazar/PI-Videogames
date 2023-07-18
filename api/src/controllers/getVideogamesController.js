const { getVideogames } = require("../utils/endpoints")
const { Videogame } = require("../db")


async function getVideogamesController(req,res) {
    try {
        const videogamesArray = await getVideogames();
        const testingId = videogamesArray[0].id
        console.log(testingId)
        const seLlamoPreviamente = await Videogame.findByPk(testingId)
        if(seLlamoPreviamente){
            res.status(200).json(videogamesArray)
        } else {
            await Videogame.bulkCreate( videogamesArray )
            return res.status(200).json({results: videogamesArray })
        }
        
        
    } catch (error) {
        console.log(error)
        return res.status(404).json({error: error})
    }
}

module.exports = {
    getVideogamesController
}