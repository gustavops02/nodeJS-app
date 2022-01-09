require('dotenv').config()

const express = require('express')
const routes = require('./routes/userRoutes')

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth', routes)


app.listen(port, () => {
    console.log({ error: false })
})