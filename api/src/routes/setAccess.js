const {Router} = require('express')
const router = Router()
const {setAccess, accessListener }= require('../controllers/setAccess')

router.get('/setAccess', setAccess)

router.get('/accessListener', accessListener)

module.exports = router;