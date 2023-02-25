
const InsuranceClaim = require('../../models/InsuranceClaims');
const PolicySchema = require('../../models/Policy');
const mongoose = require("mongoose");

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

module.exports.deleteClaim = async(req, res) => {
    const update = { status: 'Deleted' }
    const claimID  = req.body._id;
    console.log(claimID)
    employee_policies = await InsuranceClaim.findOneAndUpdate({'_id':mongoose.Types.ObjectId(claimID), "status":{$ne:"Approved"}},update,{new:true}).exec();
    console.log(employee_policies)
    return res.status(201).json({employee_policies});
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

module.exports.retrieve = async(params, res) => {
    try {
        const savedClaim = await InsuranceClaim.findById(params.claimId);
        return res.status(200).json({
            claim: savedClaim
        })
    } catch(err) {
        return res.status(400).json({
            status: 400,
            message: err
        })
    }
}

module.exports.edit = async(params, res) => {
    const newClaim = new InsuranceClaim({
        insuranceId: params.insuranceId || "",
        firstName: params.firstName || "",
        lastName: params.lastName || "",
        expenseDate: params.expenseDate || "",
        amount: params.amount || "",
        purpose: params.purpose || "",
        followUp: params.followUp || "",
        previousClaimId: params.previousClaimId || "",
        status: params.status || "",
    })

    try {
        await InsuranceClaim.findById(params.claimId).then(async (savedClaim) => {
            console.log(savedClaim);
            savedClaim.insuranceId = params.insuranceId || savedClaim.insuranceId;
            savedClaim.firstName = params.firstName || savedClaim.firstName;
            savedClaim.lastName = params.lastName || savedClaim.lastName;
            savedClaim.expenseDate = params.expenseDate || savedClaim.expenseDate;
            savedClaim.amount = params.amount || savedClaim.amount;
            savedClaim.purpose = params.purpose || savedClaim.purpose;
            savedClaim.followUp = params.followUp || savedClaim.followUp;
            savedClaim.previousClaimId = Date.now();
            savedClaim.status = "Pending";
            try{
                const updatedClaim = await InsuranceClaim.findByIdAndUpdate(params.claimId, savedClaim);
                return res.status(200).json({
                    message: "claim updated successfully"
                })
            } catch (error) {
                return res.status(400).json({
                    status: 400,
                    message: error
                })
            }

        });

    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error
        })
    }
}


module.exports.retrieveClaimsLimited = async(req, res) => {
    const { eId, stat } = req.query;
    console.log("hell")

    var result = []

    policies = await PolicySchema.find({employeeId: eId}).exec()
    for (policy of policies) {
        console.log(policy)
        insurId = policy._id.toString()
        console.log(insurId)
        claims = []
        if (stat != '') {
            claims = await InsuranceClaim.find({insuranceId: insurId, status: stat}).exec()
        } else {
            claims = await InsuranceClaim.find({insuranceId: insurId}).exec()
        }
        console.log(claims)
        result = result.concat(claims)
        console.log(result)
    }
    // user = await Us
    return res.status(200).json(result)
}
