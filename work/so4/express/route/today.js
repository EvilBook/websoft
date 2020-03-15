var express = require("express");
var router  = express.Router();

router.get("/today", (req, res) => {
    let data = {};

    data.date = new Date();

    res.render("today", data);
});

module.exports = router;