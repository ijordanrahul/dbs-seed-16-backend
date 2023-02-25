const PolicySchema = require("../../models/Policy");
const mongoose = require("mongoose");


module.exports.retrievePolicy = async(req, res) => {
    const { employeeID } = req.body;
    console.log(req.body)
    employee = await PolicySchema.findById(mongoose.Types.ObjectId(employeeID)).exec();
    console.log(employee)
