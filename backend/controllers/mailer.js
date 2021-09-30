const nodemailer = require("nodemailer");
const gen_message = require("../templates/email_verification");
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE_NAME,
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.send_verification = async (user_email, username, domain, token) => {
  const message = gen_message.get_template(user_email, username, domain, token);

  try {
    const info = await transporter.sendMail(message);
    console.log(info);
  } catch (err) {
    throw err;
  }
};
