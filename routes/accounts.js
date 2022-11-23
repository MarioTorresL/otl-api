const router = require("express").Router();

const { verifyToken } = require("../middlewares/validateToken")
const { getAccounts, getOneAccount, putAccount, deleteAccount, postAccount } = require("../controllers/accounts")
//route : /accounts
//
router.get("/", verifyToken, getAccounts);

router.get("/:id", verifyToken, getOneAccount);

router.post("/", verifyToken, postAccount);

router.put("/:id", verifyToken, putAccount);

router.delete("/:id", verifyToken, deleteAccount);

module.exports = router;
