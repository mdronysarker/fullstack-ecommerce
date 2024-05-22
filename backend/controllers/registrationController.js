const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

const registrationController = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.send({ error: "please fill up the all feild" });
    return;
  }
  if (password && password.length < 6) {
    res.send({ error: "password is too short" });
    return;
  }

  const existingUser = await User.find({ email: email });
  // console.log(existingUser);

  if (existingUser.length > 0) {
    return res.send({ error: "email already exist" });
  } else {
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });
    bcrypt.hash(password, 10, async function (err, hash) {
      const user = new User({
        name: name,
        email: email,
        password: hash,
        otp: otp,
      });
      user.save();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "mdronyrsk01724@gmail.com",
          pass: "ogeb negx qfxn hqiu",
        },
      });

      const info = await transporter.sendMail({
        from: "mdronyrsk01724@gmail.com",
        to: email,
        subject: "This you email varification ✔",
        html: `Here is your otp: ${otp}`,
      });

      res.send({
        name: user.name,
        email: user.email,
        role: user.role,
        otp: user.otp,
      });
    });
  }
};

module.exports = registrationController;
