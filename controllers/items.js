const { Items } = require("../models/item");

const getItems = async (req, res) => {
  try {
    const user = req.me;

    const items = await Items.find({ user });

    return res.status(200).json({
      message: "All items",
      items,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};

const getOneItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const uid = req.me;

    const item = await Items.findById(itemId);

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    if (item.user !== uid) {
      return res.status(401).json({
        message: "This item belongs to another user",
        error: "Unauthorized",
      });
    }

    return res.status(200).json({
      message: "get one item",
      item,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};

const postItem = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};
const putItem = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};
const deleteItem = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      message: "Bad Request",
      error: err.message,
    });
  }
};

module.exports = { getItems, getOneItem, postItem, putItem, deleteItem };
