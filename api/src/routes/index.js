const { Router } = require('express');
const router = Router();
const videogames = require("./videogames")



router.use("/", videogames)



module.exports = router;
