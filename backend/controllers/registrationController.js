const User = require("../model/userModel");
const bcrypt = require("bcrypt");

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
    bcrypt.hash(password, 10, function (err, hash) {
      const user = new User({
        name: name,
        email: email,
        password: hash,
      });
      user.save();
      res.send({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    });
  }
};

module.exports = registrationController;
