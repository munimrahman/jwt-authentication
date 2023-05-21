const productServices = require("../services/product.service");

exports.postProduct = async (req, res, next) => {
  try {
    const result = await productServices.postProductService(req.body);
    res.status(200).send({
      success: true,
      message: "Product Posted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const r = await productServices.getAllProductService();
    res.status(200).send({
      success: true,
      data: {
        count: r.resultCount,
        products: r.result,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteProductById = async (req, res, next) => {
  try {
    const result = await productServices.deleteProductByIdService(
      req.params.id
    );

    res.status(200).send({
      success: true,
      message: "Product Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
