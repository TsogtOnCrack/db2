const express = require ("express")
const mongoose = require('mongoose')
const Blogs = require("./models/Blogs")

const app = express()
app.use(express.json())

const MONGODB_LINK = "mongodb+srv://tsogt:plsopen1@fs.lmd09pj.mongodb.net/test"

mongoose.connect(MONGODB_LINK)
const connection = mongoose.connection

connection.once("once",()=>{
    console.log("connected to mongoose")
})


app.get("/", async (req, res)=>{
    const Blog  = await Blogs.find().lean()
    res.send({data:users})

})

app.get ("/blogs", (req, res)=>{
    res.send("helo")
})

app.post  ("/blogs", async (req, res)=>{

    const {author, content, comments} = req.body
     
    const blog = await Blogs.create ({
        author,
        content,
        comments
    })

    res.send("You have posted a new Blog")

})

app.listen(3001 , () =>{
    console.log("ss is running on port: 3001")
})

