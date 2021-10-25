const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
   connect =  await mongoose.connect(
      process.env.DATABASE_CONNECT,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log("Connected to Database");
  } catch (error) {
    console.log("Database Not Connected");
  }
};

module.exports = ConnectDB;
