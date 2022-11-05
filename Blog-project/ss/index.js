const express = require ("express")
const mongoose = require('mongoose')
const Blogs = require("./models/Blogs")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use (cors())

const MONGODB_LINK = "mongodb+srv://tsogt:plsopen1@fs.lmd09pj.mongodb.net/test"

mongoose.connect(MONGODB_LINK)
const connection = mongoose.connection

connection.once("once",()=>{
    console.log("connected to mongoose")
})


app.get("/blogs", async (req, res)=>{
    const Blog  = await Blogs.find().lean()
    res.send({Blog})

})

app.post("/blogs", async (req, res)=>{

    const {author, content, comments, title} = req.body
     
    const blog = await Blogs.create ({
        author,
        content,
        comments,
        title,
    })

    res.send({blog})

}) 

app.get("/blogs/:postId", async (req, res) => {
    const postId = req.params.postId;
    console.log('p: ', postId)
    const post = await Blogs.findById(postId);
    console.log('p2: ', post)
    res.send({
      data: post,
    });
  });

app.listen(3001 , () =>{
    console.log("ss is running on port: 3001")
})


