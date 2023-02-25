const schemes = require('../models/InsuranceClaims');
// module.exports.insert = async(res, params) => {
//     const newClaim = new Claim({

//     })

//     try {
//         return res.success(201).json({message: "Claim created successfully"});
//     } catch (error) {
//         return res.status(400).json({
//             status: 400,
//             message: error
//         })
//     }
// }

module.exports.retrieveClaimsLimited = async(req, res) => {
    const { id } = req.params;
    return res.status(200).json({
        status: true,
        testString: "teststring",
        echoId: id
    })
}
