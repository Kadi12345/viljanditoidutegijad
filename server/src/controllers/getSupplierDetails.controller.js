const db = require('../db');
const suppliers = db.suppliers;

module.exports = async function (req, res) {
  try {
    const supplier = await suppliers.findOne({ _id: req.params.id });
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};