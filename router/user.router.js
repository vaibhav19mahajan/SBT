const express = require("express");
const ctrl = require("../controller/user.controller");

const router = express.Router();

router.get("/", ctrl.findAll);

router.get("/:id", ctrl.findById);

router.post("/", ctrl.create);

router.put("/", ctrl.update);

router.delete("/:id", ctrl.delete);

module.exports = router;