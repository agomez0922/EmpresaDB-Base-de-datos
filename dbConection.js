const mongoose = require("mongoose")
const atlas = "mongodb+srv://dbAngello:342596@cluster0.c6bld.mongodb.net/empresaDB?retryWrites=true&w=majority"
mongoose.connect(atlas,{useNewUrlParser:true,useUnifiedTopology:true})
.then(db=>console.log("Base de datos conectada"))
.catch(err=>console.log(err))

module.exports = mongoose