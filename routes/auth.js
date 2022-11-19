const router = require("express").Router();

const { login } = require("../controllers/auth");

//route: api/auth

router.post("/", login);

module.exports = router;
