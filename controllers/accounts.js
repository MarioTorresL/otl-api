const { Accounts } = require("../models/account");

const getAccounts = async (req, res) => {
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
    const accountId = req.params.id;
    const uid = req.me;

    const account = await Accounts.findById(accountId);

    if (!account) {
      return res.status(404).json({
        message: "Account not found",
      });
    }

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
    const { name, user, description, total_balance, active = true } = req.body;

    const newAccount = await Accounts.create({
      name,
      user,
      description,
      total_balance,
      active,
    });

    return res.status(200).json({
      message: "Account create",
      newAccount,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};

const putAccount = async (req, res) => {
  try {
    const { name, description, total_balance, active } = req.body
    const accountId = req.params.id
    const uid = req.me;


    const account = await Accounts.findById(accountId)

    if(!account){
      return res.status(404).json({
        message: 'Account Not Found'
      })
    }

    if(account.user !== uid){
      return res.status(401).json({
        message: 'Unauthorized'
      })
    }

    const userUpdate = await Accounts.findByIdAndUpdate(accountId, {
      name,
      description,
      total_balance,
      active
    })

    return res.status(200).json({
      message: 'Account Update',
      userUpdate
    })



  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const accountId = req.params.id;
    const uid = req.me;

    const account = await Accounts.findById(accountId);

    if (!account) {
      return res.status(404).json({
        message: "Account not found",
      });
    }

    if (account.user !== uid) {
      return res.status(401).json({
        message: "This account belongs to another user",
        error: "Unauthorized",
      });
    }

    await Accounts.findByIdAndDelete(accountId);

    return res.status(200).json({
      message: "Account delete",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};

module.exports = {
  getAccounts,
  getOneAccount,
  postAccount,
  putAccount,
  deleteAccount,
};
