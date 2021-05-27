const db = require("../db");
const offers = db.offers;

module.exports = async function (req, res) {
  try {
    await offers.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Pakkumine kustutatud!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
