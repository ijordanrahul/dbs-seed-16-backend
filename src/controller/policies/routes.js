const express = require("express");

const controller = require("./index");

const router = express.Router();

// router.post(
//     '/api/insert_claim',
//     (req, res) => {
//         controller.insert(req.body, res);
//     }
// );

router.get("/api/get_all_policies", (req, res) => {
  controller.retrievePolicy(req, res);
});

router.post("/api/insertPolicy", (req, res) => {
    controller.insertPolicy(req, res);
  });

module.exports = router;