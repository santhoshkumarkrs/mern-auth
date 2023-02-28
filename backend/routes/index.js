var express = require("express");
var router = express.Router();

var authRoutes = require("../controllers/auth.js");

router.use("/", authRoutes);

module.exports = router;
