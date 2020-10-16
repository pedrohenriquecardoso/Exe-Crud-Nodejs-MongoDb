const express = require("express");
var cors = require("cors");
const ConnectDB = require("./db/mongodb");
require('dotenv').config();

const user = require("./routes/user");

ConnectDB.conectarMongo();

const app = express();
app.use(express.json()); // middleware
app.use(cors()); // middleware

app.use("/user", user);

console.log("SERVIDOR INICIALIZADO");
app.listen(3000);