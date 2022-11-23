const router = require("express").Router();

//route: /items
//
router.get("/");
router.post("/");
router.put("/:id");
router.delete("/:id");

module.exports = router;
