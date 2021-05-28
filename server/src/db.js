const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = {
  offers: require("./models/offer.model"),
  suppliers: require("./models/suppliers.model"),
};
