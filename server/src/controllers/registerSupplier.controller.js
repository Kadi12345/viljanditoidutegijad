const db = require('./../db')
const suppliers = db.suppliers

module.exports = async (req, res) => {
  try {
    let isSupplier = await suppliers.find({ email: req.body.email });
    console.log(isSupplier);
    if (isSupplier.length >= 1) {
      return res.status(409).json({
        message: "email on juba kasutusel"
      });
    }
    const supplier = new suppliers({
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      password: req.body.password
    });
    let data = await supplier.save();
    const token = await supplier.generateAuthToken(); 
    res.status(201).json({ data, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};