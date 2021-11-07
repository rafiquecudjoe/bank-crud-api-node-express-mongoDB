const express = require("express");
const { body } = require("express-validator");

const {
  createAccountController,
  listAccountController,
} = require("../Controllers/account");
const isAuth = require("../Middleware/is-Auth");



const AccountRouter = express();

// Routes
/** 
 * @swagger
 * components:
 *    schema:
 *    Account:
 *       name: 
             required: true
             type: String
  
         number: 
            required: true`
            type: String
  
         type: 
            required: true
            type: String
  

        bankId:
             type: Schema.Types.ObjectId,
             ref: "Bank"
             required: true 

 * /account:
 * post:
 *     description: Used to create a Bank Account
 *      Responses:
 *         '200'
 *             description: A successful Response
 *      
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 **/

AccountRouter.post(
  "/account",isAuth,
  [
    body("name").trim().not().isEmpty().withMessage("Name cannot be empty"),
    body("number").trim().not().isEmpty().withMessage("Number cannot be empty"),
    body("type").trim().not().isEmpty().withMessage("Type cannot be empty"),
    body("bankId").trim().not().isEmpty().withMessage("bankID cannot be empty"),
  ],
  createAccountController
);

AccountRouter.get("/account/:id?",isAuth, listAccountController);

module.exports = AccountRouter;
