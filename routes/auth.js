const router = require("express").Router();

const { login, renew } = require("../controllers/auth");
const {verifyToken} = require("../middlewares/validateToken");

//route: /auth

router.post("/", login);

router.get('/renew', verifyToken, renew)

module.exports = router;
