const express = require("express");
const {body} = require('express-validator')
const {
  listBankController,
  createBankController,
  updateBankController,
  removeBankController,
} = require("../Controllers/bank");
const BankModel = require("../Models/bankModel");


const BankRouter = express();

BankRouter.get("/banks/:id?", listBankController);

BankRouter.post(
  "/bank",
  [
    body("nameOfBank").trim().not().isEmpty().withMessage('Name cannot be empty'),
    body("location").trim().not().isEmpty().withMessage('Location cannot be empty'),
    body("branch").trim().not().isEmpty().withMessage('Branch cannot be empty'),
    body("address").trim().not().isEmpty().withMessage('Address cannot be empty'),
    body("accountNumber").trim().not().isEmpty().withMessage('AccountNumber cannot be empty'),
    body("tel")
      .isMobilePhone("en-GH")
      .custom((value, { req }) => {
        return BankModel.findOne({ tel: value }).then((bankDoc) => {
          if (bankDoc) return Promise.reject("Phone Number already Taken");
        });
      }),
  ],
  createBankController
);

BankRouter.put("/bank", updateBankController);

BankRouter.delete("/bank", removeBankController);


module.exports = BankRouter;
