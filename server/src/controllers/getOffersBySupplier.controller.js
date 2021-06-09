const db = require("../db");
const offers = db.offers;

module.exports = async function (req, res) {
  try {
    const result = {
      offersBySupplier: await offers.find({ email: req.params.email }),
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
