const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");

    const decoded = jwt.verify(token, "secret");
    req.supplierData = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Autoriseerimine ebaõnnestus"
    });
  }
};