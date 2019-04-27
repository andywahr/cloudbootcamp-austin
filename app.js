const express = require("express");
const app = express();

const port = process.env.PORT || "3000";

app.get("/", (req, resp) => {
    if ( req.query.name != undefined ) {
        var name = req.query.name;
        resp.send(`Hello from Cloud Bootcamp Austin!  Especially to ${name}`);
        console.log(`Get to / with ${name}`);
    } else {
        resp.send(`Hello from Cloud Bootcamp Austin!`);
        console.log(`Get to /`);
    }
});

app.listen(port, () => { console.log(`Loaded on Port ${port}`)});