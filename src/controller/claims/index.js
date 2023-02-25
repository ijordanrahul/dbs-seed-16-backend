const InsuranceClaim = require('../../models/InsuranceClaims');

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

    console.log(newClaim);

    try {
        const savedClaim = await newClaim.save();
        //console.log(savedClaim)
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
    const { eId } = req.query;
    return res.status(200).json({
        status: true,
        testString: "teststring",
        echoEId: eId
    })
}