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
    // console.log("hell")
    // policies = await PolicySchema.find({employeeId: "63f99f8bb23b33b81d61cd49"}).exec()
    // user = await UserSchema.findById(mongoose.Types.ObjectId(userid)).exec();
    // claims = await InsuranceClaimSchema.findById(mongoose.Types.ObjectId('63f9b4929717f7fc3aecf431')).exec();
    // claims = await InsuranceClaimSchema.find({insuranceId: "63f9ab7f9717f7fc3aecf430"}).exec()
    // console.log(policies)
    // console.log(claims)
    // claim = await InsuranceClaimSchema.find({}).exec();
    return res.status(200).json({
        status: true,
        testString: "teststring",
        echoEId: eId
    })
}
