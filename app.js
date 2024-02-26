const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");


const teacherRoute = require('./routes/teacherRoute')
const classRoute = require('./routes/classRoute')
const childRoute = require('./routes/childRoute')
const authRoute = require('./routes/authRoute') 

const server = express()
const port = process.env.PORT || 8080

mongoose.connect('mongodb://127.0.0.1:27017/NurserySystems').then(()=>{
    server.listen(port,()=>{
        console.log(`server listening on port ${port} `);
    })
    
    console.log('Database connected successfully...');
}).catch((err)=> console.log(err))


dotenv.config()
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, 'images')))
server.use("/api-docs",
swaggerUi.serve, swaggerUi.setup(swaggerDocument));


server.use(authRoute)
server.use(teacherRoute)
server.use(childRoute)
server.use(classRoute)

server.use((request, response, next) => {
    response.status(404).json({message:"Not Found"})
})

server.use((error,request, response, next) => {
    response.status(500).json({message: error + ""})
})


