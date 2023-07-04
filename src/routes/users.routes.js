const { Router } = require('express')
const {
  deleteUser,
  getUser,
  listUsers,
  updateUser
} = require('../controllers/user.controllers')

const router = Router()

router.get('/', listUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
