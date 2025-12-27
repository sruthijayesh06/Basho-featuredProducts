const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,

    material: String,
    careInfo: String,

    price: { type: Number, required: true },
    weightKg: Number,

    productType: {
      type: String,
      enum: ["ready", "custom"],
      required: true
    },

    image: { type: String }, // Cloudinary / local URL
    isFeatured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
