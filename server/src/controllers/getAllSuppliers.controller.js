  
const db = require('./../db')
const suppliers = db.suppliers

module.exports = async function (req, res) {
  try {
    let filter = {}
    filter = req.query
    if (req.query.Email === 'true') {
      filter.Email = { $exists: true }
    }

    console.log(filter)

    const allUsers = await suppliers.find(filter)
    res.status(200).json({ allUsers })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}