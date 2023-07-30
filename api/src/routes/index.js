const { Router } = require('express');
const router = Router();
const videogames = require("./videogames")
const access = require('./setAccess')


router.use("/", videogames)

router.use('/', access)

module.exports = router;
