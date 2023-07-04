const { User } = require('../models/user.model')
const bcrypt = require('bcrypt')
const { createJWT } = require('../helpers/createJWT')

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: 'Missing fields' })
    }

    const passwordHashed = await bcrypt.hash(password, 10)

    await User.create({ username, password: passwordHashed })

    const user = await User.findOne({ where: { username } })

    const token = createJWT(user.id)
    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ error })
  }
}

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ where: { username } })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = createJWT(user.id)

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ error })
  }
}

module.exports = { registerUser, loginUser }
