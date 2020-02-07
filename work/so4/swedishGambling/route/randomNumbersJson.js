var express = require("express");
var router  = express.Router();

router.get("/", (req, res) => {
    let numbers = {};

    numbers.numbers={
        firstNumber : Math.floor(Math.random() * 35 + 1),
        secondNumber :Math.floor(Math.random() * 35 + 1),
        thirdNumber :Math.floor(Math.random() * 35 + 1),
        fourthNumber :Math.floor(Math.random() * 35 + 1),
        fifthNumber :Math.floor(Math.random() * 35 + 1),
        sixthNumber :Math.floor(Math.random() * 35 + 1),
        seventhNumber :Math.floor(Math.random() * 35 + 1)
    };
    
        
        

    res.render("numbersView", numbers);
    console.log(numbers);
});


module.exports = router;