const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

//declaration
const routes = require("./routes");

// // //to connect db

// connect to db

mongoose.connect(
  "mongodb://0.0.0.0:27017/",
  {
    dbName: "db_users",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("Connected to DATABASE"))
);

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/api", routes);

app.listen(8000, () => {
  console.log("server started");
});
