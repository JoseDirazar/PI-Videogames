
const  {Videogame, Genres} = require("../db") 

async function getGamesByGenres(req, res) {
    try {
        const {nombreGenero} = req.query
        const genresArray = await Genres.findAll({
            where: {
                nombre: [nombreGenero]
            },
            include: {
                model: Videogame,
                attributes: ['id', 'nombre', "fecha_lanzamiento", 'imagen', "rating", 'descripcion', 'plataformas']
            }
        })

        if(genresArray) {
            return res.status(200).json(genresArray)
        } else {
            return res.status(200).json({message: 'No hay videojuegos en la DB'})
        }
        
    } catch (error) {
        
    }
}

module.exports = {
    getGamesByGenres
}