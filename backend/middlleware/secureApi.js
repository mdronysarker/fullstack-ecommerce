const secureApi = (req, res, next) => {
  console.log("ami");
  next();
};

module.exports = secureApi;
