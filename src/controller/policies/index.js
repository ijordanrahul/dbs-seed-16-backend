const PolicySchema = require("../../models/Policy");
const mongoose = require("mongoose");
const Policy = require("../../models/Policy");


module.exports.retrievePolicy = async(req, res) => {
    const { employeeID } = req.body;
    console.log(req.body)
    employee = await PolicySchema.findById(mongoose.Types.ObjectId(employeeID)).exec();
    console.log(employee)
}

module.exports.insertPolicy = async(params, res) => {

    console.log(params.body)

    const newPolicy = new Policy({
        employeeId: params.employeeId,
        insuranceType: params.insuranceType,
        policyStartDate: params.policyStartDate,
        policyTerm: params.policyTerm,
        policyEndDate: params.policyEndDate,
        claimLimit: params.claimLimit,
        remainingClaimLimit: params.remainingClaimLimit,
    })

    console.log(newPolicy)






    try {
        const savedPolicy = await newPolicy.save();
        console.log(savedPolicy)
        return res.status(201).json({message: "Policy created successfully"});
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error
        })
    }
}
