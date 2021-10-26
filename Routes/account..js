const express = require("express");
const { body } = require("express-validator");

const {
  createAccountController,
  listAccountController,
} = require("../Controllers/account");

const AccountRouter = express();

AccountRouter.post(
  "/account",
  [
    body("name").trim().not().isEmpty().withMessage("Name cannot be empty"),
    body("number").trim().not().isEmpty().withMessage("Number cannot be empty"),
    body("type").trim().not().isEmpty().withMessage("Type cannot be empty"),
    body("bankId").trim().not().isEmpty().withMessage("bankID cannot be empty"),
  ],
  createAccountController
);

AccountRouter.get("/account/:id?", listAccountController);

module.exports = AccountRouter;
