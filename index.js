const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3000;
const { connection } = require("./db/config");

//create express
const app = express();
//cors
app.use(cors("*"));
//parse request
app.use(express.json());
//db connection
connection();

//routes

app.use('/users', require('./routes/users'));

app.get("/", (req, res) => res.status(200).json("Server works!!!"));

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});

module.exports = app;
