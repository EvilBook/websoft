const port = process.env.DBWEBB_PORT || 1337;

const express = require("express");

const app= express();

const path = require("path");

const routeNumbers = require("./route/randomNumbers.js");
const routeNumbersJson = require("./route/randomNumbersJson.js");

var router = express.Router();

app.use(express.static(path.join(__dirname, "public")));


app.use("/lotto", routeNumbers);


var url = require('url');



app.get("/lotto-json", (req, res) => {
    var url_parts = url.parse(req.url, true);
var query = url_parts.query;
    var numbers=[];
    console.info(req.query.row);
    if(req.query.row==undefined){
    for(var i=0; i<8; i++){
        numbers[i] = Math.floor(Math.random() * 35 + 1);
        }
        

    res.send(numbers);
    }else{
        var array=req.query.row.split(',');
        res.send(array);
    }
});
app.set("view engine", "ejs");


app.listen(port, () => {
    console.log("Server is listening on port" + port);
    
    console.log("Available routes are:");
    app._router.stack.forEach((r) => {
        if(r.route && r.route.path) {
            console.log(r.route.path);
        }
    });
});