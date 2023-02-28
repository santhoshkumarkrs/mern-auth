const db = require("../models");
const User = db.users;

var express = require("express");
var router = express.Router();

//Register
router.post("/Register", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  User.find({ email: email }, (err, user) => {
    console.log(user);
    if (user.length >= 1) {
      res.send({ message: "user already exit" });
    } else {
      const user = new User({ name, email, password });
      user
        .save(user)
        .then((data) => {
          res.send({ message: "User is created", data });
        })
        .catch((err) => {
          res
            .status(500)
            .send({
              message:
                err.message || "some error occured while creating user in db",
            });
        });
    }
  });
});

//Login

router.post("/Login", (req, res) => {
  const { email, password } = req.body;
  User.find({ email: email }, (err, user) => {
    if (user.length != 0) {
      if (password === user[0].password) {
        res.send({ message: "login success", user: user });
      } else {
        res.send({ message: "wrong credentials " });
      }
    } else {
      res.send({ Error: "Email is not registered" });
    }
  });
});

module.exports = router;
