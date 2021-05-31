const db = require('./../db')
const supplier = require(`../models/supplier.model`)

module.exports = async (req, res) => {
  try {
    let isSupplier = await supplier.find({ email: req.body.email });
    if (isSupplier.length >= 1) {
      return res.status(409).json({
        message: "See email on juba kasutusel"
      });
    }
    isSupplier = new supplier({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    let data = await isSupplier.save();
    const token = await isSupplier.generateAuthToken(); 
    res.status(201).json({ data, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};