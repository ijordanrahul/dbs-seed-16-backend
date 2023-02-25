const express = require("express");

const controller = require("./index");

const router = express.Router();

router.post("/api/logIn", (req, res) => {
  console.log("tets")  
  controller.logIn(req, res);
});

router.post("/api/signUp", (req, res) => {
  controller.signUp(req, res);
});

module.exports = router;
