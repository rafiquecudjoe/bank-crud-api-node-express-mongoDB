const express = require('express')   //imports express
const ConnectDB = require('./DB')
const BankRouter = require("./Routes/bank")
const AccountRouter = require("./Routes/account.");
require("dotenv").config()


const app = express()

app.use(express.json())


const Port = process.env.PORT


ConnectDB()

app.use(BankRouter)
app.use(AccountRouter);



app.listen(Port, () => {
    console.log(`Server is running on port ${Port} `)
})