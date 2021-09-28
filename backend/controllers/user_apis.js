const User = require("../models/users");

exports.register = async (req, res) => {
  const temp_data = req.body;
  try {
    const e_user = await User.findOne({ email: temp_data.email })
    if (e_user) {
      res.send({ message: "User With the email already exists" })
    } else {
      const user = await new User({
        firstname: temp_data.firstname,
        lastname: temp_data.lastname,
        email: temp_data.email,
        password: temp_data.password,
      });
      const auth_token = await user.genToken()
      user.save();
      res.cookie("auth", auth_token);
      res.send({ message: "registered" })
    }
  } catch (err) {
    console.log(err)
    res.status(500).res({message:"500: Internal Server Error"})
  }
};
exports.login = (req, res) => {};
