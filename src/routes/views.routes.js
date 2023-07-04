const { Router } = require('express')
const { index, crearUsuario, updateUsuario } = require('../controllers/views.controllers')

const router = Router()

router.get('/', index)
router.get('/crear-usuario', crearUsuario)
router.get('/:id', updateUsuario)

module.exports = router
