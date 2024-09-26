const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      default: 'SKU',
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
      trim: true,
    },
    quantity: {
      type: String,
      required: [true, 'Please add a quantity'],
      trim: true,
    },
    price: {
      type: String,
      required: [true, 'Please add a price'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      trim: true,
    },
    image: {
      type: Object,
      default: {},
    },
    subcategory: {
      type: String,
      required: [true, 'Please add a sub-category'],
      trim: true,
    },
    beginningInventory: {
      type: Number,
      default: 0,
    },
    endingInventory: {
      type: Number,
      default: 0,
    },
    refNum: {
      type: String,
      required: true,
      default: 'REF',
      trim: true,
    },
    purchaseDate: {
      type: Date,
      required: true,
    },
    unitActualPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    unitRetailPrice: {
      type: Number,
      default: 0.0,
    },
    unitProfit: {
      type: Number,
      default: 0.0,
    },
    unitPercentage: {
      type: Number,
      default: 0,
    },
    totalActualPrice: {
      type: Number,
      default: 0.0,
    },
    totalRetailPrice: {
      type: Number,
      default: 0.0,
    },
    totalProfit: {
      type: Number,
      default: 0.0,
    },
    totalPercentage: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
