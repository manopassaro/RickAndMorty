const express = require("express");
const Controller = require("../controllers/controllers");
const router = express.Router();

router.get("/", Controller.findAllCh);
router.post("/creation", Controller.createCh);

module.exports = router;
