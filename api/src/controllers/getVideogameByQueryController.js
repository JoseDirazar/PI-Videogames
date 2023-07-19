const { searchVideogame} = require("../utils/endpoints")
const { Videogame, Genres } = require("../db")

async function getVideogameByQueryController(req,res) {
    try {
        const {name} = req.query
        
        const [arrayOfSearchGame, genresOfFirstResult] = await searchVideogame(name)
        //console.log(resultApi)
        const searchedGame = arrayOfSearchGame[0]
        console.log(searchedGame)
        const busquedaenDB = await Videogame.findOne({
            where:{
                nombre: searchedGame.nombre
            }
        })
        if(!busquedaenDB) {
            const gameFromDb = await Videogame.create(searchedGame)
            await gameFromDb.addGenres(genresOfFirstResult)
            return res.status(200).json({results: arrayOfSearchGame})
        } else if(busquedaenDB) {
            res.status(200).json(busquedaenDB)
        } else {
            return res.status(404).json({error: 'El Videojuego buscado no existe'})
        }
        
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
    

}

module.exports = {
    getVideogameByQueryController
}