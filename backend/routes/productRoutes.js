const express = require("express");
const router = express.Router();
const {
  getFeaturedProducts
} = require("../controllers/productController");

router.get("/featured", getFeaturedProducts);

module.exports = router;
