const jwt = require("jsonwebtoken");

const config = require("../../config");
const UserSchema = require("../models/User");

const secretKey = "SECRET";

const checkIfAuthenticated = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token)
    return res.status(401).json({
      message: "No token provided!",
      status: 401,
    });

  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err)
      return res.status(401).json({ message: "Invalid token!", status: 401 });
    user = await UserSchema.findById(decoded.id).exec();
    if (!user) {
      return res.status(401).json({ message: "User not found!", status: 401 });
    }
    req.user = user;
    next();
  });
};

module.exports = { checkIfAuthenticated };
