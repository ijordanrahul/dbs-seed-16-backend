const mongoose = require("mongoose");
const UserSchema = require("../../models/User");

module.exports.logIn = async (req, res) => {
  const { userid, password } = req.body;
  user = await UserSchema.findById(mongoose.Types.ObjectId(userid)).exec();
  // schemes.User.findOne({ username: username }, function (err, user) {
  // if (err) return res.status(400).json({ status: 400, message: err });
  // Bcrypt.compare(password, user.password, (err, success) => {
  // if (err) return res.status(400).json({ status: 400, message: err });
  // if (success) {
  // const token = jwt.sign({ id: user.id, username }, config.API_KEY_JWT, {
  // expiresIn: config.TOKEN_EXPIRES_IN,
  // });
  // return res.status(201).json({ token });
  // } else {
  // return res
  // .status(400)
  // .json({ status: 400, message: "Invalid password" });
  // }
  // });
  // });
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
