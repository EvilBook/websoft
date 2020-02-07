var express = require("express");
var router  = express.Router();

router.get("/", (req, res) => {
    let numbers = {};

    numbers.numbers=[];
    
        for(var i=0; i<8; i++){
        numbers.numbers[i] = Math.floor(Math.random() * 35 + 1);
        }
        

    res.render("numbersView", numbers);
});


module.exports = router;