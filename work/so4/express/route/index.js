var express = require('express');
var router  = express.Router();

// Add a route for the path /
router.get('/', (req, res) => {
    res.send("its just /");
});

// Add a route for the path /about
router.get("/about", (req, res) => {
    res.send("/ about");
});

module.exports = router;