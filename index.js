const express = require("express"); //imports express
const ConnectDB = require('./DB')
const BankRouter = require("./Routes/bank")
const AccountRouter = require("./Routes/account.");
const UserRouter = require("./Routes/user");
require("dotenv").config()

const app = express();

app.use(express.json());

const Port = process.env.PORT




ConnectDB()

app.use(BankRouter);
app.use(AccountRouter);
app.use(UserRouter)





app.listen(Port, () => {
  console.log(`Server is Running on port ${Port}`);
});
