const { User } = require('../models/user.model')

const listUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const getUser = async (req, res) => {
  try {
    const userId = req.params.id

    const user = await User.findOne({ where: { id: userId } })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id
    const { username } = req.body

    const user = await User.update({ username }, { where: { id: userId } })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id

    await User.destroy({ where: { id: userId } })

    res.status(200).json({ message: 'User deleted' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

module.exports = { getUser, updateUser, listUsers, deleteUser }
