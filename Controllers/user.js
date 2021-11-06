const UserModel = require("../Models/userModel");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
require("dotenv").config();

const saltRounds = 10;

const createUserController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({
        message: {
          error1: errors,
        },
      });
    } else {
      const { name, email, password } = req.body;

      const hash = await bcrypt.hash(password, saltRounds);

      const user = new UserModel({
        name,
        email,
        hash,
      });

      const saved = await user.save();

      res.status(200).json({
        message: "User Successfully created",
        data: { name: saved.name, email: saved.email },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const signinUserController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({
        message: {
          error1: errors,
        },
      });
    } else {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });
      if (user) {
        const hash = user.hash;
        const compare = await bcrypt.compare(password, hash);

        if (compare === true) {
          res.status(200).send("User logged in Successfully");
        } else {
          res.status(300).send("Username of Password Invalid");
        }
      } else {
        res.status(300).send("User not found");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUserController, signinUserController };
