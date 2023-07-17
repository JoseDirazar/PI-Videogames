const {Router} = require("express")
const router = Router()
const {getVideogameByIdController, getVideogameByQueryController, getVideogamesController, postVideogameController} = require("../controllers/indexControllers")
const {genresController} = require("../controllers/indexControllers")

router.get("/videogames", getVideogamesController)

router.get("/videogames/:idVideogame", getVideogameByIdController)

router.get("/videogames", getVideogameByQueryController)

router.post("/videogames", postVideogameController)

router.get("/genres", genresController)

module.exports = router;