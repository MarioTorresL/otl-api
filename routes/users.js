const router = require("express").Router();

const {verifyToken} = require('../middlewares/validateToken')
const {
  getUsers,
  postUser,
  deleteUser,
  putUser,
} = require("../controllers/users");

//route: /users

router.get("/", getUsers);

router.post("/", postUser);

router.put("/:id", verifyToken, putUser);

router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
