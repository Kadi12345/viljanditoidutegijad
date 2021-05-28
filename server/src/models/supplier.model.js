const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
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
      { _id: supplier._id, supplier: supplier, email: supplier.email },
      "secret"
    );
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
  };
  
  
  userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      throw new Error({ error: "Nõuetele mittevastavad sisselogimise detailid" });
    }
    const isPasswordMatch = await bcryptjs.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error({ error: "Nõuetele mittevastavad sisselogimise detailid" });
    }
    return user;
  };
  
  const User = mongoose.model("User", userSchema);

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("suppliers", schema);