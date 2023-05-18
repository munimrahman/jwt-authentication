const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const verifyToken = require("../middleware/verifyToken");
// const authorization = require("../middleware/authorization");
// const verifyToken = require("../middleware/verifyToken");

router
  .route("/products")
  .get(verifyToken, productController.getAllProducts)
  .post(productController.postProduct);

router.route("/products/:id").delete(productController.deleteProductById);

module.exports = router;
