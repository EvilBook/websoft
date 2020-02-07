const port = process.env.DBWEBB_PORT || 1337;

const express = require("express");
const app= express();


app.use((req, res, next) => {
    console.info(`Got request on ${req.path} (${req.method}).`);
    next();
});

app.get("/", (req, res) => {
    res.send("get /");
});

app.get("/about", (req, res) => {
    res.send("/ about");
});

app.listen(port, () => {
    console.log("Server is listening on port" + port);
    
    console.log("Available routes are:");
    app._router.stack.forEach((r) => {
        if(r.route && r.route.path) {
            console.log(r.route.path);
        }
    });
});

