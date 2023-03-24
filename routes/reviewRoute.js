const express = require("express");
const router = express.Router();
const Review = require("../models/reviewModel");

router.route("/api/create").post((req, res) => {
  const name = req.body.name;
  const evaluation = req.body.evaluation;
  const message = req.body.message;
  const newReview = new Review({
    name,
    evaluation,
    message,
  });

  newReview.save();
});

router.route("/api/reviews").get((req, res) => {
  try {
    Review.find().then((foundReviews) => res.json(foundReviews));
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
