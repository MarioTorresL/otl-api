const router = require("express").Router();

const { verifyToken } = require("../middlewares/validateToken")
const { getAccounts, getOneAccount } = require("../controllers/accounts")
//route : /accounts
//
router.get("/", verifyToken, getAccounts);

router.get("/:id", verifyToken, getOneAccount);

router.post("/", verifyToken);

router.put("/:id", verifyToken);

router.delete("/:id", verifyToken);

module.exports = router;
