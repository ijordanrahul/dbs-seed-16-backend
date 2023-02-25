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
  console.log("tets")  
  controller.retrievePolicy(req, res);
});

module.exports = router;