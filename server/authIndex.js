require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const authServer = require('./routes/authServer') 
const port = process.env.AUTH_PORT || 4000

const uri = process.env.DB_URL
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

app.use('/api/o/', authServer)

// app.use('/api', seed)
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
