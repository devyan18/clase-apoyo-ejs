require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { sequelize } = require('./src/settings/mysql')

require('ejs')

require('./src/models/user.model')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(express.json())

app.set('view engine', 'ejs')

// setear donde van a estar los archivos publicos o estaticos

app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/users', require('./src/routes/users.routes'))
app.use('/api/auth', require('./src/routes/auth.routes'))
app.use('/', require('./src/routes/views.routes'))

app.listen(process.env.PORT, async () => {
  try {
    await sequelize.sync({ force: false })
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})
