require('dotenv').config()

const express = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth', userRoutes)


app.listen(port, () => {
    console.log({ error: false })
})