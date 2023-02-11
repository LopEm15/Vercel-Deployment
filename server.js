const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT

const app = express()

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.get('/home', (request, response) => {
    response.send('Welcome to the home page')
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})

module.exports = app;