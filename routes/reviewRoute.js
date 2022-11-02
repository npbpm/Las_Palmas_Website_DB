const express = require("express");
const router = express.Router();
const Review = require("../models/reviewModel");

router.route("/create").post((req, res) => {
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

router.route("/reviews").get((req, res) => {
  Review.find().then((foundReviews) => res.json(foundReviews));
});

module.exports = router;
