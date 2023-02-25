const express = require("express");
const router = express.Router();

const controller = require("./index");
const authMiddleware = require("../../middlewares/validateAuth");

router.post("/api/logIn", (req, res) => {
  controller.logIn(req, res);
});

router.post("/api/signUp", (req, res) => {
  controller.signUp(req, res);
});

router.get(
  "/api/test",
  (req, res, next) => {
    authMiddleware.checkIfAuthenticated(req, res, next);
  },
  (req, res) => {
    controller.hello(req, res);
  }
);

module.exports = router;
