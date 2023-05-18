const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
// const authorization = require("../middleware/authorization");
// const verifyToken = require("../middleware/verifyToken");

router
  .route("/products")
  .get(productController.getAllProducts)
  .post(productController.postProduct);

router.route("/products/:id").delete(productController.deleteProductById);

module.exports = router;
