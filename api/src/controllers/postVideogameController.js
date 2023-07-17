
const { Videogame } = require("../db")

async function postVideogameController(req,res) {
    try {
        const { id, nombre, descripcion, plataformas, imagen, fecha_lanzamiento, rating } = req.body

        const videogame = {
            //id,
            nombre,
            descripcion,
            plataformas,
            imagen,
            fecha_lanzamiento,
            rating
        }

        await Videogame.create(videogame)
        
        return res.status(200).json({message: 'Videojuego creado!.'})
    } catch (error) {
        return res.status(404).json({error: error})
    }
    

}

module.exports = {
    postVideogameController
}