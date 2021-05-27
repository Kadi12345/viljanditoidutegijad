const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  product: { type: String, required: true },
  imageUrl: { type: String, required: true },
  offerDate: { type: String, required: true },
  supplier: { type: String, required: true },
  contact: { type: String, required: true },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("offers", schema);
