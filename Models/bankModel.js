const mongoose = require("mongoose")

const { Schema } = mongoose

const bankSchema = new Schema({
  nameOfBank: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  branch: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  tel: {
    required: true,
    type: String,
    },
    accounts: [
        {
            accountsId: {
                required: true,
                type: Schema.Types.ObjectId,
                ref:"Account"
          }
      }
  ]
  
});


const BankModel = mongoose.model("Bank", bankSchema)

module.exports = BankModel





