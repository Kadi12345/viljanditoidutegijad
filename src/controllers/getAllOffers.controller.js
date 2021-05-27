const db = require("../db");
const offers = db.offers;

module.exports = async function (req, res) {
  try {
    let filter = {};
    filter = req.query;
    if (req.query.type === "true") {
      filter.type = { $exists: true };
    }

    const allOffers = await offers.find(filter);
    res.status(200).json({ allOffers });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
