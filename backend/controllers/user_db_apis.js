const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//-------------------------------------END OF IMPORTS--------------------------------------//

//--------------------------------USER REGISTRATION VIA EMAIL------------------------------//
// to add new user data to DB(registration)
exports.register = async (req, res) => {
  const temp_data = req.body;
  try {
    const e_user = await User.findOne({ email: temp_data.email });

    if (e_user) {
      // Email is already registered
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
        auth_type: "email",
        third_partyID: null,
      });

      // Sending the verification mail to the user-email
      const isSent = await user.send_verification(req, res);
      if (isSent) {
        user.save();
        res.send({ message: "Registered, please visit your email" });
      } else {
        // vaification email was not sent
        res.status(400).res({ message: "Can't verify the email address." });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).res({ message: "Something went wrong" });
  }
};
//---------------------------------------END OF USER REGISTRATION VIA EMAIL-----------------------------//

//---------------------------------------API TO VARIFY USER EMAIL REQUEST-------------------------------//
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
//---------------------------------------END API TO VARIFY USER EMAIL REQUEST-------------------------------//
