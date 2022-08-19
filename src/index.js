const express = require('express')
const app = express()

const morgan = require('morgan')

//Variables
const port = process.env.PORT || 3000
const v1usersroute = require('./v1/routes/user.js')
const v1postsroute = require('./v1/routes/post.js')
const v1categoryroute = require('./v1/routes/category.js')

//Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/v1/users', v1usersroute)
app.use('/api/v1/post', v1postsroute)
app.use('/api/v1/category', v1categoryroute)

//Listen
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})