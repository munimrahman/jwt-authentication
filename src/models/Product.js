const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name must be at most 100 characters"],
    },
    price: {
      type: String,
      required: [true, "Price is required"],
    },
    photo: {
      type: String,
      required: [true, "Photo is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
