const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  accounts: [
    {
      id: {
            type: Schema.Types.ObjectId,
          ref:"Number"
      },
    },
  ],
});

const UserModel = mongoose.model('User', userSchema)

module.exports= UserModel