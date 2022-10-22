const express = require ("express")
const mongoose = require ("mongoose")
const User = require("./models/Users")

const app = express()
app.use(express.json())

const MONGODB_URL = "mongodb+srv://tsogt:plsopen1@fs.lmd09pj.mongodb.net/test"

mongoose.connect (MONGODB_URL)
const connection = mongoose.connection

connection.once("once" , ()=>{
    console.log("connected")
})

app.get("/", async (req,res)=>{
    const users  = await User.find().lean()
    res.send({data:users})
})

app.post("/users", async(req, res)=>{
    const {userName , email, password} = req.body
    const user = await User.create({
        userName,
        email,
        password,
    })
    res.send({message:"new user was created"})

    
})

app.put("/users", async(req,res)=>{
    const {userName , email, password} = req.body
    const user = await User.findOne({email : email}).exec()

    let message

    if(!user){
        message = "no such user"
    }else{
        user.password = password
        user.userName = userName

        user.save()

        message= "User name and password was changed"
    }

    res.send(message)
})

app.delete("/users",async (req,res)=>{
    const {userName , email, password} = req.body
    const user = await User.findOne({email : email}).exec()

    if(user){
        user.delete()
    }
    

    res.send("succesfully deleted")
})

app.listen(3000, ()=>{
    console.log("server is now running on port: 3000")
})
