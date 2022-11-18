const router = require("express").Router();

const {
  getUsers,
  postUser,
  deleteUser,
  putUser,
} = require("../controllers/users");

//route: api/users

router.get("/", getUsers);

router.post("/", postUser);

router.put("/:id", putUser);

router.delete("/:id", deleteUser);

module.exports = router;
