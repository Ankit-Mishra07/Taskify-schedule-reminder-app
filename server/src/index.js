const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const registerController = require('./controllers/register.controller')
const loginController = require('./controllers/login.controller')
const dataController = require('./controllers/data.controller')
const urlController = require('./controllers/url.controller')
app.use('/user', registerController)
app.use('/user', loginController)
app.use('/data', dataController)
app.use('/url', urlController)


module.exports = app



