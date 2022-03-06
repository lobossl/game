//express webserver default
const port = 8080;
const express = require("express");
const app = express();
app.use(express.static('www'));
const server = app.listen(port,() =>
{
        console.log("Starting webserver on port " + port);
});
