const express = require("express");

const {
  createAccountController,
  listAccountController,
} = require("../Controllers/account");

const AccountRouter = express();



AccountRouter.post("/account", createAccountController);

AccountRouter.get("/account/:id?", listAccountController);

module.exports = AccountRouter;
