const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Users } = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await Users.find({}, "first_name last_name email ");

    console.log("user", users);

    return res.status(200).json({
      message: "Get all users",
      users,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};

const postUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password, balance } = req.body;

    const verifyEmail = await Users.findOne({ email });
    if (verifyEmail) {
      return res.status(400).json({
        message: "email already exist",
      });
    }

    const newUser = await Users.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: bcrypt.hashSync(password, 7),
      balance: balance,
    });

    const token = jwt.sign({ id: newUser.id }, process.env.SECRET_KEY, {
      expiresIn: "5h",
    });

    return res.status(200).json({
      message: "User Created",
      token,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};

const putUser = async (req, res) => {
  //TODO: validate put user also if is admin role or same user
  try {
    const id = req.params;

    const { first_name, last_name, password } = req.body;

    const user = await Users.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const userUpdate = await Users.findByIdAndUpdate(id, {first_name, last_name})

    return res.status(205).json({
      message:'User Updated',
      userUpdate
    })
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await Users.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await Users.findByIdAndDelete(id);

    return res.status(200).json({
      message: "User Deleted",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};
module.exports = { getUsers, postUser, deleteUser, putUser };
