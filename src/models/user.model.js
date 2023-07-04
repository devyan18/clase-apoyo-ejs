const { sequelize, DataTypes } = require('../settings/mysql')

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true
})

module.exports = { User }
