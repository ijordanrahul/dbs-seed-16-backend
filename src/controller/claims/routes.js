const express = require('express');

const controller = require('./index');

const router = express.Router();

router.post(
    '/api/insert_claim',
    (req, res) => {
        controller.insert(req.body, res);
    }
);

module.exports = router;