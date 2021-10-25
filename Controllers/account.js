const AccountModel = require("../Models/accountModel"); //imports AccountModel

const createAccountController = async (req, res) => {
  const { id, name, number, type } = req.body;

  const newaccount = new AccountModel({
    bankId: id,
    name,
    number,
    type,
  });

  const created = await newaccount.save();

  if (created) {
    res.json({ message: "Account Created", data: created });
  }
};

const listAccountController = async (req, res) => {
  const { bankId } = req.params;

  if (bankId) {
    const bank = await AccountModel.findById(bankId);

    if (bank) {
      res.json({ data: bank });
    }
  } else {
    const banks = await AccountModel.find();

    if (banks) {
      res.json({ data: banks });
    }
  }
};

module.exports = {
  createAccountController,
  listAccountController,
};
