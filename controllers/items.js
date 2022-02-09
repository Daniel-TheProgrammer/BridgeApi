const Item = require("../models/Item");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllItems = async (req, res) => {
  const items = await Item.find().sort("createdAt");
  res.status(StatusCodes.OK).json({ items, count: items.length });
};
const getItem = async (req, res) => {
  const {
    params: { id: itemId },
  } = req;

  const item = await Item.findOne({
    _id: itemId,
  });
  if (!item) {
    throw new NotFoundError(`No job with id ${itemId}`);
  }
  res.status(StatusCodes.OK).json({ item });
};

const createItem = async (req, res) => {
  const item = await Item.create(req.body);
  res.status(StatusCodes.CREATED).json({ item });
};

const updateItem = async (req, res) => {
  const {
    body: { name, description, price },

    params: { id: itemId },
  } = req;

  if (name === "" || description === "") {
    throw new BadRequestError("name or description fields cannot be empty");
  }
  const item = await Item.findByIdAndUpdate({ _id: itemId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!item) {
    throw new NotFoundError(`No item with id ${itemId}`);
  }
  res.status(StatusCodes.OK).json({ item });
};

const deleteItem = async (req, res) => {
  const {
    params: { id: itemId },
  } = req;

  const item = await Item.findByIdAndRemove({
    _id: itemId,
  });
  if (!item) {
    throw new NotFoundError(`No job with id ${itemId}`);
  }
  res.status(StatusCodes.OK).send();
};

module.exports = {
  createItem,
  deleteItem,
  getAllItems,
  updateItem,
  getItem,
};
