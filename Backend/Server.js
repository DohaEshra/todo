const express = require("express");
const server = express();
const body_parser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const TodoRouter = require("./Routers/TodoRouter")



let connection = mongoose.connect("mongodb://0.0.0.0:27017/TodoDB")
.then(()=>console.log("DB connected"))
.catch(error=>console.log(error))

server.listen(process.env.PORT||8080,()=>{
    console.log("I'm listening...")
})

server.use(cors())
//logger mw
server.use((request, response, next)=>{
    console.log(request.url, request.method);
    next();
})

//mongoose.st
// let connection = mongoose.connect("mongodb://0.0.0.0:27017/EventSystemDB")
// .then(()=>console.log("DB connected"))
// .catch(error=>console.log(error))

//body parsing mw
server.use(body_parser.json());
server.use(body_parser.urlencoded({extended:false}));

//routers
server.use(TodoRouter);

//not found mw
server.use((request, response)=>{
    response.status(404).json({message:"page not found"})
})

//error mw
server.use((error, request, response, next)=>{
    response.status(500).json({message:error+" "})
})