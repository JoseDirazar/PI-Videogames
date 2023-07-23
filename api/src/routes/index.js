const { Router } = require('express');
const router = Router();
const videogames = require("./videogames")
const users = require('./users')

// Import the verifyToken middleware from users.js
const verifyToken = require('./users').verifyToken;

// Use the verifyToken middleware before the /protected route
router.use('/protected', verifyToken);

router.use("/", videogames)

router.use('/', users)

module.exports = router;
