const express = require("express"); //imports express
const ConnectDB = require('./DB')
const BankRouter = require("./Routes/bank")
const AccountRouter = require("./Routes/account.");
const UserRouter = require("./Routes/user");
require("dotenv").config('')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require("swagger-jsdoc")

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    swagger:'2.0.0',
    info: {
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name:"Amazing Developer"
      },

      servers: [
        {url: "http://localhost:5000"}
      ]

    }
  },
  apis:["./Routes*/account.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)


app.use(express.json());
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))
const Port = process.env.PORT




ConnectDB()

app.use(BankRouter);
app.use(AccountRouter);
app.use(UserRouter)





app.listen(Port, () => {
  console.log(`Server is Running on port ${Port}`);
});
