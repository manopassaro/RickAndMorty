const express = require("express");
const Controller = require("../controllers/controllers");
const router = express.Router();

router.get("/", Controller.teste);

module.exports = router;
