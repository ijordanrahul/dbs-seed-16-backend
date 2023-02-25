const mongoose = require("mongoose");
const dbUrlMongoDB = require("./config").dbUrlMongoDB;

const main = async () => {
  try {
    await mongoose.connect(dbUrlMongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = main;

