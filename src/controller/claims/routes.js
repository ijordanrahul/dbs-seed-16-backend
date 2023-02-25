const express = require('express');

const controller = require('./index');

const router = express.Router();

router.post(
    '/api/insert',
    (req, res) => {
        controller.insert(req.body, res);
    }
);

router.post(
    '/api/update',
    (req, res) => {
        controller.edit(req.body, res);
    }
);

router.post("/api/getOne", (req, res) => {
    controller.retrieve(req.body, res);
});


router.get("/api/retrieve_all_claims_limited", (req, res) => {
  controller.retrieveClaimsLimited(req, res);
});

module.exports = router;

