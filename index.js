const express = require("express");

const { PORT: port = 3000 } = process.env;
const app = express();

app.listen(port, () => console.log(`Listening ${port}`));
