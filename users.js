const express = require("express")
const morgan = require("morgan")

const dataBase = require("./dbConection")


const usersRoutes=require('./routes/users.Routes')

const app= express();
const port=5000

app.use(morgan("dev"));
app.use(express.json());


//routes
app.use("/users", usersRoutes)

app.listen(port,()=> console.log("servidor escuchando el puerto", port));
