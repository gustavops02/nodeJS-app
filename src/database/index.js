require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL_ACCESS, { useNewUrlParser: true }).then((db) => {
    console.log('database is connected')

})

module.exports = mongoose