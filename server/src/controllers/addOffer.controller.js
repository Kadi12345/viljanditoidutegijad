const db = require("./../db");
const offers = db.offers;

module.exports = async function (req, res) {
  try {
    await offers.create(req.body);

    res.status(200).json({ message: "Pakkumine lisatud!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
