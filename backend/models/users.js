const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const email_template = require("../templates/email_verification");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SG_KEY);
const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    require: true,
    trim: true,
  },
  lastname: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
  },
  jwt: {
    type: String,
  },
  mailtoken: {
    type: String,
  },
  isactive: {
    type: Boolean,
  },
});

userSchema.pre("save", async function (next) {
  // hashing the password
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.genToken = async function () {
  try {
    const token = await jwt.sign(
      { _id: this._id.toString() },
      process.env.SECRET
    );
    this.jwt = token;
    return token;
  } catch (err) {
    console.log(err);
  }
};

// Sends the vefification email to the user
userSchema.methods.send_verification = async function (req, res) {
  console.log(req.headers.host);
  const mail_message = email_template.get_template(
    this.email,
    this.firstname,
    req.headers.host,
    this.mailtoken
  );
  try {
    await sgMail.send(mail_message);
    return true;
  } catch (err) {
    console.log("------SGMAIL----- " + err);
    return false;
  }
};

const user = new mongoose.model("User", userSchema);
module.exports = user;
