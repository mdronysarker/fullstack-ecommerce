const mongoose = require("mongoose");

const mongoConfig = () => {
  mongoose
    .connect(
      "mongodb+srv://ecommerce:WmhroXaOklIzl7tD@cluster0.rsfnkpj.mongodb.net/ecommerce-backend?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Database Connected!"));
};

module.exports = mongoConfig;
