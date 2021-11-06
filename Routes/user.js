const express = require("express");
const {createUserController,signinUserController} = require("../Controllers/user");
const { body } = require("express-validator");
const UserModel = require("../Models/userModel");

const UserRouter = express();

UserRouter.post(
  "/signup",
  [
    body("name").trim().not().isEmpty().withMessage("User name is Required"),
    body("email")
      .isEmail()
      .withMessage("Email in invalid")
      .custom((value, { req }) => {
        return UserModel.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("Email already taken");
          }
        });
      }),
    body("password").trim().isLength({ min: 5 }),
  ],
  createUserController
);

UserRouter.post(
  "/login",
  [body("email").isEmail().withMessage("Email in invalid")],
  signinUserController
);

module.exports = UserRouter;
