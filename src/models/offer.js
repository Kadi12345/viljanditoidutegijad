const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  product: { type: String, required: true },
  offerDate: { type: String, required: true },
  supplier: {
    supplierID: {
      type: Schema.Types.ObjectId,
      ref: "suppliers",
    },
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
  },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("offers", schema);
