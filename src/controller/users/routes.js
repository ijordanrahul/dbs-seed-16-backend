const express = require("express");

const controller = require("./index");

const router = express.Router();

router.post("/api/auth", (req, res) => {
  controller.logIn(req, res);
});

module.exports = router;
