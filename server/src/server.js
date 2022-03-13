const mongoose = require("mongoose")

const app = require('./index')
const connect = require('./configs/db')

const port = process.env.PORT || 5000;

app.listen(port, async (req, res) => {
    await connect()

    console.log(`Listening on PORT ${port}`)
})
