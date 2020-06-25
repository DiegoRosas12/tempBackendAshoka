const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 
const db = require("./app/models");
db.sequelize.sync();



app.get('/', function(req, res){
    res.send("Home")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>
    console.log(`Server is listening in port: ${PORT}`)
)