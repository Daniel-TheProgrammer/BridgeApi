const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide item name"],
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, "Please provide description"],
      maxlength: 100,
    },
    price: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);
