const Product = require("backend/models/Product");

// GET featured products
exports.getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ isFeatured: true });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch featured products" });
  }
};
