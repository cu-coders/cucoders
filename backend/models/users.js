const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailer = require("../controllers/mailer");

//-----------------------------------------------------END OF IMPORTS--------------------------------------------//

//------------------------------------------------------USER SCHEMA----------------------------------------------//
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
  auth_type: {
    type: String,
    require: true,
    enum: ["email", "google", "github"],
  },
  third_partyID: {
    type: String,
  },
});

//-----------------------------------------------------END OF USER SCHEMA------------------------------------//

//-------------------------------------------------------DB MIDDLEWARES--------------------------------------//
userSchema.pre("save", async function (next) {
  // hashing the password
  if (this.isModified("password")) {
    if (this.password && !this.googleID) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
  next();
});

//-------------------------------------------------------END OF DB MIDDLEWARES-------------------------------//

//----------------------------------------------------------DB METHODS----------------------------------------//

//Mail varification Methods
userSchema.methods.send_verification = async function (req, res) {
  try {
    await mailer.send_verification(
      this.email,
      this.firstname,
      req.headers.host,
      this.mailtoken
    );
    return true;
  } catch (err) {
    console.log("Mailing agent failed:" + err);
    return false;
  }
};
//-------------------------------------------------------END DB METHODS----------------------------------------//

const user = new mongoose.model("User", userSchema);
module.exports = user;
