
const { Videogame } = require("../db")

async function postVideogameController(req,res) {
    try {
        const { id, nombre, descripcion, plataformas, imagen, fecha_lanzamiento, rating, generos } = req.body

        if(!id || !nombre || !imagen || !generos ) return res.status(404).json({error: `Los campos: ID: ${id}, nombre: ${nombre}, imagen ${imagen}, generos ${generos}, son requeridos.`})
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
        
        if(siYaExiste) {
            return res.status(404).json({error: 'El videojuego que intentas crear, ya existe.'})      
          
        } 
        const gameCreated = await Videogame.create(videogame)
        await gameCreated.addGenres(generos)
        return res.status(200).json({message: 'Videojuego creado!.'})
        
    } catch (error) {
        return res.status(404).json({error: error})
    }
    

}

module.exports = {
    postVideogameController
}