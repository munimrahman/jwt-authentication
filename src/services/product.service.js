const Product = require("../models/Product");

exports.postProductService = async (data) => {
  const result = await Product.create(data);
  return result;
};

exports.getAllProductService = async () => {
  const result = await Product.find({});
  const resultCount = await Product.countDocuments({});
  return { result, resultCount };
};

exports.deleteProductByIdService = async (id) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
