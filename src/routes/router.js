const express = require("express");
const Controller = require("../controllers/controllers");
const router = express.Router();

router.get("/", Controller.findAllCh);
router.post("/creation", Controller.createCh);
router.get("/find/:id", Controller.findById);
router.post("/update/:id", Controller.updateCh);
router.delete("/delete/:id", Controller.deleteCh);

module.exports = router;
