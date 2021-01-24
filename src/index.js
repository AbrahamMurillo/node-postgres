const express = require('express')
const app = express()
const routers = require('./routes/index')


app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routers
app.use(routers)
const PORT = 3000
app.listen(PORT);
console.log(`Running on port ${PORT}`)