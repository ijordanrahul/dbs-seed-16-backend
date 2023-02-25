const UserSchema = require("../../models/User");

module.exports.logIn = async (res, parameters) => {
  const { username, password } = parameters;
  console.log(await UserSchema.find({}).exec());
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
