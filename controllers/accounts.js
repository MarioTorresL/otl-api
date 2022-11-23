const { Accounts } = require("../models/account");

const getAccounts = async (req, res) => {
  console.log("heeeeey");
  try {
    const user = req.me;

    const accounts = await Accounts.find({ user });

    return res.status(200).json({
      message: "All accounts",
      accounts,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};

const getOneAccount = async (req, res) => {
  try {
    const accountId = req.params;
    const uid = req.me;

    const account = await Accounts.findById(accountId);

    if (account.user !== uid) {
      return res.status(401).json({
        message: "This account belongs to another user",
        error: "Unauthorized",
      });
    }

    return res.status(200).json({
      message: "Get one Account",
      account,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};

const postAccount = async (req, res) => {
  try {
  } catch (err) {}
};
const putAccount = async (req, res) => {
  try {
  } catch (err) {}
};
const deleteAccount = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports = { getAccounts, getOneAccount };
