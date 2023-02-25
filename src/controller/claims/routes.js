const express = require('express');

const controller = require('./index');

const router = express.Router();

router.post(
    '/api/insert',
    (req, res) => {
        controller.insert(req.body, res);
    }
);

router.get("/api/retrieve_all_claims_limited", (req, res) => {
  controller.retrieveClaimsLimited(req, res);
});

router.get("/api/deleteClaim", (req, res) => {
  console.log('delete')
  controller.deleteClaim(req, res);
});

module.exports = router;

