const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// to add new user data to DB(registration)
exports.register = async (req, res) => {
  const temp_data = req.body;
  try {
    const e_user = await User.findOne({ email: temp_data.email });

    // Email is already registered
    if (e_user) {
      res.send({ message: "An account with this email already exists" });
    } else {
      // Registering new user
      const user = await new User({
        firstname: temp_data.firstname,
        lastname: temp_data.lastname,
        email: temp_data.email,
        password: temp_data.password,
        mailtoken: await bcrypt.hash(temp_data.email, 5),
        isactive: false,
      });

      // Generating auth token for client-end
      const auth_token = await user.genToken();

      // Sending the verification mail to the user
      const isSent = await user.send_verification(req, res);
      if (isSent) {
        user.save();
        res.cookie("auth", auth_token);
        res.send({ message: "Registered, please visit your email" });
      } else {
        // mail was not sent
        res.status(400).res({ message: "Can't verify the email address." });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).res({ message: "Something went wrong" });
  }
};

exports.login = (req, res) => {};

// to authenticate client-cookies to identify the user
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

// to verifiy the email of user and activate the account
exports.verify_mail = async (req, res) => {
  try {
    const user = await User.findOne({ mailtoken: req.query.token });
    if (user) {
      user.mailtoken = null;
      user.isactive = true;
      await user.save();
      res.send("Verified");
    } else {
      res.send("Something went wrong");
    }
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
};
