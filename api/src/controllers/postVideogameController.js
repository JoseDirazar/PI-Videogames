
const { Videogame } = require("../db")

async function postVideogameController(req,res) {
    try {
        const { id, nombre, descripcion, plataformas, imagen, fecha_lanzamiento, rating, genres } = req.body

        const videogame = {
            id,
            nombre,
            descripcion,
            plataformas,
            imagen,
            fecha_lanzamiento,
            rating,
        }
        const siYaExiste = await Videogame.findOne({
            where:{
                nombre: videogame.nombre
            }
        })
        
        if(!siYaExiste) {
            const gameCreated = await Videogame.create(videogame)
            await gameCreated.addGenres(genres)
            return res.status(200).json({message: 'Videojuego creado!.'})
        } else {
            return res.status(404).json({error: 'El videojuego que intentas crear, ya existe.'})      
        }
        
    } catch (error) {
        return res.status(404).json({error: error})
    }
    

}

module.exports = {
    postVideogameController
}