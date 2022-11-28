const router = require("express").Router();

const {
  getItems,
  getOneItem,
  postItem,
  putItem,
  deleteItem,
} = require("../controllers/items");
//route: /items
//
router.get("/", getItems);
router.get("/:id", getOneItem);
router.post("/", postItem);
router.put("/:id", putItem);
router.delete("/:id", deleteItem);

module.exports = router;
