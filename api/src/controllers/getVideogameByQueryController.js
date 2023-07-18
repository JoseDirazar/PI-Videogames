const { searchVideogame} = require("../utils/endpoints")
const { Videogame } = require("../db")

async function getVideogameByQueryController(req,res) {
    try {
        const {name} = req.query
        
        const resultApi = await searchVideogame(name)
        //console.log(resultApi)
       /*  const busquedaenDB = await Videogame.findOne({
            where:{
                nombre: name
            }
        }) */
        if(resultApi) {
            return res.status(200).json(resultApi)
        } else {
            return res.status(404).json({error: 'El Videojuego buscado no existe'})
        }
        
    } catch (error) {
        return res.status(404).json({error: error})
    }
    

}

module.exports = {
    getVideogameByQueryController
}