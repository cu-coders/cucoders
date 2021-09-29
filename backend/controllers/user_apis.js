const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  const temp_data = req.body;
  try {
    const e_user = await User.findOne({ email: temp_data.email });
    if (e_user) {
      res.send({ message: "An account with this email already exists" });
    } else {
      const user = await new User({
        firstname: temp_data.firstname,
        lastname: temp_data.lastname,
        email: temp_data.email,
        password: temp_data.password,
      });
      const auth_token = await user.genToken();
      user.save();
      res.cookie("auth", auth_token);
      res.send({ message: "registered" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).res({ message: "500: Internal Server Error" });
  }
};

exports.login = (req, res) => {};
exports.authenticate = async (req, res) => {
  const auth = req.cookies.auth;
  try {
    const isVarified = await jwt.verify(auth, process.env.SECRET);
    const user = await User.findOne({ _id: isVarified._id });
    if (user) {
      res.cookie("valid", true);
      res.status(200).send({ username: user.firstname });
      console.log({ username: user.firstname });
    } else {
      res.status(404).send({ message: "User not Found" });
    }
  } catch (e) {
    res.status(500).send({ message: "500: Internal server error" });
  }
};
