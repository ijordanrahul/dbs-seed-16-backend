const schemes = require('../../models/InsuranceClaims');

module.exports.insert = async(params, res) => {
    const newClaim = new InsuranceClaim({
        insuranceId: params.insuranceId,
        firstName: params.firstName,
        lastName: params.lastName,
        expenseDate: params.expenseDate,
        amount: params.amount,
        purpose: params.purpose,
        followUp: params.followUp,
        previousClaimId: params.previousClaimId,
        status: params.status,
        lastEditedClaimDate: params.lastEditedClaimDate,
    })

    try {
        const savedClaim = await newClaim.save();
        console.log(savedClaim)
        return res.status(201).json({message: "Claim created successfully"});
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error
        })
    }
}


module.exports.retrieveClaimsLimited = async(req, res) => {
    const { eId } = req.query;
    return res.status(200).json({
        status: true,
        testString: "teststring",
        echoEId: eId
    })
}