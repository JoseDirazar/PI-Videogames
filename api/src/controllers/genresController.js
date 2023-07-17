const {getGenres} = require("../utils/endpoints")
const {Genres} = require("../db")

async function genresController(req,res) {
    try {
        const genres = await getGenres()
        console.log(genres)
        await Genres.bulkCreate(genres)
        
        return res.status(200).json({genres: genres})
    } catch (error) {
        return res.status(404).json({error: error})
    }
    

}

module.exports = {
    genresController
}