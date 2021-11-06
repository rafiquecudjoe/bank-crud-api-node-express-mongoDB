const BankModel = require("../Models/bankModel"); //imports BankModel
const { validationResult } = require("express-validator");

const listBankController = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const bank = await BankModel.findById(id);

      if (bank) {
        res.json({ data: bank });
      }
    } else {
      const banks = await BankModel.find();

      if (banks) {
        res.json({ data: banks });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const createBankController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ message: errors.array()[0].msg });
    }

    const { nameOfBank, location, branch, address, tel } = req.body;
    const newbank = new BankModel({
      nameOfBank,
      location,
      branch,
      address,
      tel,
    });

    const saved = await newbank.save();

    if (saved) {
      res.json({ message: "Bank Created", data: saved });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateBankController = async (req, res) => {

  try {
    const { nameOfBank, location, branch, address, tel, id } = req.body;

    const update = await BankModel.updateOne(
      { _id: id },
      { $set: { address, tel, nameOfBank, location, branch } }
    );

    res.json({ message: "Bank Updated", data: update });
    
  } catch (error) {
    console.log(error)
  }
  
};

const removeBankController = async (req, res) => {
  try {
      const { id } = req.body;

      const removed = await BankModel.findByIdAndRemove(id);

      res.json({ message: "Bank Updated", data: removed });
    
  } catch (error) {
    console.log(error)
  }

};

module.exports = {
  listBankController,
  createBankController,
  updateBankController,
  removeBankController,
};
