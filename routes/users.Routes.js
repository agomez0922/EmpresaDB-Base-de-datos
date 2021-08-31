const express = require('express')
const router = express.Router()

//controladores
const UserControllers= require("../controllers/users.controller")
router.post("/createUser", UserControllers.createUser)
router.delete("/deleteUser/:userId", UserControllers.deleteUser)
router.get("/getAllUsers", UserControllers.getAllUsers)
router.get("/getUserById/:userId", UserControllers.getUserById)
module.exports=router