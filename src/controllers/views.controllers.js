const { User } = require('../models/user.model')

const index = async (req, res) => {
  try {
    const users = await User.findAll()

    res.render('index', { title: 'Test', users })
  } catch (error) {
    res.status(500).json({ error })
  }
}

const crearUsuario = async (req, res) => {
  res.render('crear-usuario', { title: 'Crear usuario' })
}

const updateUsuario = async (req, res) => {
  res.render('editar-usuario', { title: 'Editar usuario' })
}

module.exports = { index, crearUsuario, updateUsuario }
