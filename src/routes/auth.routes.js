const { Router } = require('express')
const { loginUser, registerUser } = require('../controllers/auth.controllers')

const router = Router()

router.put('/', loginUser)
router.post('/', registerUser)

module.exports = router
