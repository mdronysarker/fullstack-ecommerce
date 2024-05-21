const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["Admin", "Merchant", "User"],
    default: "User",
  },
});

module.exports = mongoose.model("User", userSchema);
