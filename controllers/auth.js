const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {Users} = require("../models/user");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password) {
      return res.status(400).json({
        message: "Login Error",
        error: "Email and password is required",
      });
    }

    const user = await Users.findOne({email})

    //validate
    if(!user){
      return res.status(400).json({
        message: 'Login Error',
        error: 'User or password invalid'
      })
    }

    //compare password
    const passwordValidate = bcrypt.compareSync( password , user.password)

    if(!passwordValidate){
      return res.status(400).json({
        message: 'Login Error',
        errror: 'User or password invalid'
      })
    }

    const token = jwt.sign({ id:user.id }, process.env.SECRET_KEY, {expiresIn: '5h'})

    return res.status(200).json({
      message: 'Authenticated',
      accessToken: token
    })
  } catch (err) {
    return res.status(500).json({
      message: 'Bad Request',
      error: err.message
    })
  }
};

module.exports = {login}
