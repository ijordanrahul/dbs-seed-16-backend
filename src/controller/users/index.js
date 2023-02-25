const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = require("../../models/User");

const secretKey = "SECRET";
const expiresIn = 86400;

module.exports.logIn = async (req, res) => {
  const { userid, password } = req.body;
  user = await UserSchema.findById(mongoose.Types.ObjectId(userid)).exec();
  if (user !== null) {
    if (user.password === password) {
      const token = jwt.sign({ id: user._id }, secretKey, {
        expiresIn: expiresIn,
      });
      return res.status(201).json({
        token: token,
        firstname: user.firstname,
        lastname: user.lastname,
      });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Invalid password!" });
    }
  } else {
    return res.status(400).json({ status: 400, message: "Invalid userid!" });
  }
};

module.exports.signUp = async (req, res) => {
  const { firstname, lastname, password, age } = req.body;
  const newUser = UserSchema({
    password,
    age,
    firstname,
    lastname,
  });

  try {
    const savedUser = await newUser.save();
    return res.status(201).json({
      id: new String(savedUser._id),
      firstname: savedUser.firstname,
      lastname: savedUser.lastname,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "Failed to create user!",
    });
  }
};

module.exports.hello = async (req, res) => {
  console.log(req.user);
  return res.status(201);
};
