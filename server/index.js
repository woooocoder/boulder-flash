require('dotenv').config()
const cors = require('cors')
const express = require('express')
const port = process.env.MAIN_PORT || 5050

const mongoose = require('mongoose')
const uri = process.env.DB_URL
 
const user = require('./routes/user')
const validation = require('./routes/server')

mongoose.connect(uri)
const db = mongoose.connection
db.on('error', (e) => {
    console.log(e)
})

db.once('connected', () => {
    console.log('DB connected')
})

const app = express()


app.use(express.json())
app.use(cors()) 
app.use('/api', user)
app.use('/api/v', validation)
// app.use('/api', seed)
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

