const express = require('express');

const controller = require('./index');

const router = express.Router();

// router.post(
//     '/api/insert_claim',
//     (req, res) => {
//         controller.insert(req.body, res);
//     }
// );

router.get(
    '/api/retrieve_all_claims_limited',
    (req, res) => {
        controller.retrieveClaimsLimited(req, res)
    }
)

module.exports = router;