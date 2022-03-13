const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const registerController = require('./controllers/register.controller')
const loginController = require('./controllers/login.controller')
const dataController = require('./controllers/data.controller')
app.use('/user', registerController)
app.use('/user', loginController)
app.use('/data', dataController)


module.exports = app



