const mongoose = require('mongoose')
const {Schema}= mongoose

const userSchema= new Schema({
    name:{type: String, require: true},
    lastName: {type: String, require: true},
    userName: {type: String, require: true},
    email: {type: String, require: true},
    phone: {type: String, require: true},
    password: {type: String, require: true},
    
},
{
    versionkey: false, //llave de la version de la aplicacion//
    timestamps:true //fecha de creacion y actualizacion//
}
);
module.exports = mongoose.model("Users", userSchema)