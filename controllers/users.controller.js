const Users= require('../models/users')

const userController = {}

userController.createUser= async(req,res)=>{
    try{const newUser = new Users({
        name:req.body.name,
        lastName: req.body.lastName,
        userName:req.body.userName,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
      
     })
    await newUser.save()
      res.status(201).json({message: "User created!"})
    }catch (error){
        console.log(error)
    }
}
  


userController.getUserById= async (req,res) =>{
    try{
        const user = await Users.findById(req.params.userId)
        if(user){
            res.status(202).json({message: "User found!", user: user})
        }else{
            res.status(401).json({message: "User not exist!"})
        }
    }catch (error){res.status(400).json({message: "error", error: error})}
       
}

userController.deleteUser = async (req, res) => {
    try {
        const deleted = await Users.findByIdAndDelete(req.params.userId)
        res.status(202).json({message: "Deleted!"})
    } catch (error) {
        res.status(400).json({message: "Error", error: error})
    }
}

userController.getAllUsers= async (req,res) =>{
    try{
        const users = await Users.find()
        if(users){
            res.status(202).json({message: "person found!", users:users})
        }else{
            res.status(401).json({message: "person empty!"})
        }
    }catch (error){res.status(400).json({message: "error", error: error})}
    
    
}
userController.getUserById = async (req, res) => {
    try {
        const getuser = await Users.findById(req.params.userId)
        res.status(202).json({message: "user find", users: getuser})
    } catch (error) {
        
        res.status(400).json({message: "Error", error: error})
    }
}
module.exports = userController;