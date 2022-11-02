const mongoose = require("mongoose");

const reviewSchema = {
  name: String,
  evaluation: Number,
  message: String,
};

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
