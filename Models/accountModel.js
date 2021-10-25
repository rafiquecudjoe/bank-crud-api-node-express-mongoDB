const mongoose = require("mongoose");

const { Schema } = mongoose;

const accountSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  number: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
 
  bankId:{type:Schema.Types.ObjectId, ref:"Bank" ,required:true}
});

const AccountModel = mongoose.model("Account", accountSchema);

module.exports = AccountModel;
