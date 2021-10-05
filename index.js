const express = require("express");

const { PORT: port = 3000 } = process.env;
const app = express();

app.get("/", (req, res) => res.json({ message: "ok" }));

app.listen(port);
module.exports = app;
