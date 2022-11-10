const exp = require('express'); 
const User = require('../models/Users');
const jwt = require('jsonwebtoken'); 

const userRoute = exp.Router(); 

userRoute.post("/users", async(req, res)=>{
    const {userName , email, password} = req.body
    const user = await User.create({
        userName,
        email,
        password,
    })
    res.send({message:"new user was created"})
})

userRoute.put("/users", async(req,res)=>{
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

userRoute.delete("/users",async (req,res)=>{
    const {userName , email, password} = req.body
    const user = await User.findOne({email : email}).exec()

    if(user){
        user.delete()
    }
    

    res.send("succesfully deleted")
})

userRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email, 
      password: password,
    }).lean();
    if (user) {
      token = jwt.sign(
        {
          data: user,
        },
        "secret",
        {
          expiresIn: "1h",
        }
      );
      res.send({
        token: token,
      });
      return;
    }
    res.send({
      message: "Invalid credential",
    });
  });

module.exports = userRoute; 