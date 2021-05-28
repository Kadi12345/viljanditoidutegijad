const db = require('../db')

const suppliers = db.suppliers;

module.exports = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const supplier = await suppliers.findByCredentials(email, password);
      if (!supplier) {
        return res.status(401).json({ error: "Login failed! Check authentication credentials" });
      }
      const token = await supplier.generateAuthToken();
      res.status(201).json({ supplier, token });
    } catch (err) {
      res.status(400).json({ err: err });
    }
  };