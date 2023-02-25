const PolicySchema = require("../../models/Policy");
const mongoose = require("mongoose");
const Policy = require("../../models/Policy");


module.exports.retrievePolicy = async(req, res) => {
    const employeeID  = req.body.employeeId;
    console.log(employeeID)
    employee_policies = await PolicySchema.find({ employeeId: employeeID }).exec();
    console.log(employee_policies)
    return res.status(201).json({employee_policies});
}
 
module.exports.insertPolicy = async(params, res) => {

    console.log(params.body)

    const newPolicy = new Policy({
        employeeId: params.body.employeeId,
        insuranceType: params.body.insuranceType,
        policyStartDate: params.body.policyStartDate,
        policyTerm: params.body.policyTerm,
        policyEndDate: params.body.policyEndDate,
        claimLimit: params.body.claimLimit,
        remainingClaimLimit: params.body.remainingClaimLimit,
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
