const InsuranceClaim = require('../../models/InsuranceClaims');
const PolicySchema = require('../../models/Policy');

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

module.exports.edit = async(params, res) => {
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
    console.log("hell")

    var result = []

    policies = await PolicySchema.find({employeeId: eId}).exec()
    for (policy of policies) {
        console.log(policy)
        insurId = policy._id.toString()
        console.log(insurId)
        claims = await InsuranceClaim.find({insuranceId: insurId}).exec()
        console.log(claims)
        result = result.concat(claims)
        console.log(result)
    }
    // user = await Us
    return res.status(200).json(result)
}
