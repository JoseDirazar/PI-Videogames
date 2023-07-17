require("dotenv").config();
const { getVideogames } = require("../utils/endpoints")
const { Videogame } = require("../db")
const axios = require('axios')
const {API_KEY} = process.env
const URL = 'https://api.rawg.io/api/'

async function getVideogamesController(req,res) {
    try {
        const videogamesArray = await getVideogames();
        //await Videogame.bulkCreate(data)
        //console.log(data)
       
        await Videogame.bulkCreate( videogamesArray )
        
        return res.status(200).json({results: videogamesArray })
        
    } catch (error) {
        console.log(error)
        return res.status(404).json({error: error})
    }
}

module.exports = {
    getVideogamesController
}