const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PolicySchema = new Schema({
  employeeId: {
    type: String,
    required: true,
  },
  insuranceType: {
    type: String,
    required: true,
  },
  policyStartDate: {
    type: String,
    required: true,
  },
  policyTerm: {
    type: String,
    required: true,
  },
  policyEndDate: {
    type: Date,
    required: true,
  },
  claimLimit: {
    type: Number,
    required: true,
  },
  remainingClaimLimit: {
    type: Number,
    required: true,
  },
});

module.exports = User = mongoose.model("policy", PolicySchema);

