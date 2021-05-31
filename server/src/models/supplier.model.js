const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: [true]},
  password: { type: String, required: [true]},
  tokens: [{token: {type: String, required: true}}]
});

supplierSchema.pre("save", async function(next) {
 
    const supplier = this;
    if (supplier.isModified("password")) {
      supplier.password = await bcryptjs.hash(supplier.password, 8);
    }
    next();
  });
  
  
  supplierSchema.methods.generateAuthToken = async function() {
    const supplier = this;
    const token = jwt.sign(
      { _id: supplier._id, name: supplier.name, email: supplier.email },
      "secret"
    );
    supplier.tokens = supplier.tokens.concat({ token });
    await supplier.save();
    return token;
  };
  
  
  supplierSchema.statics.findByCredentials = async (email, password) => {
    const supplier = await suppliers.findOne({ email });
    console.log(supplier);
    if (!supplier) {
      throw new Error({ error: "Nõuetele mittevastavad sisselogimise detailid" });
    }
    const isPasswordMatch = await bcryptjs.compare(password, supplier.password);
    if (!isPasswordMatch) {
      throw new Error({ error: "Nõuetele mittevastavad sisselogimise detailid" });
    }
    return supplier;
  };

supplierSchema.set("toJSON", { virtuals: true });
const suppliers = mongoose.model("suppliers", supplierSchema);
module.exports = suppliers;