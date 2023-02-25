const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InsuranceClaimsSchema = new Schema({
    // claimId will be autogenerated as _id
    insuranceId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    expenseDate: {
        type: String,
        required: false,
    },
    amount: {
        type: Number,
        required: true,
    },
    purpose: {
        type: String,
        required: true,
    },
    followUp: {
        type: Boolean,
        required: true,
    },
    previousClaimId: {
        type: Number,
        required: false,
    },
    status: {
        type: String,
        required: true,
    },
    lastEditedClaimDate: {
        type: String,
        required: false,
    },
});

module.exports = InsuranceClaims = mongoose.model("claims", InsuranceClaimsSchema);
