const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Review = require("../models/reviewModel");
const auth = require("../middleware/auth");

//@route  /api/delete/:id
//@desc   Delete a Review
//@access Private
router.delete("/:id", auth, (req, res) => {
  //   console.log(req.params);
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    Review.findByIdAndDelete(id, function (err) {
      if (!err) {
        console.log("No Error Deleting Review from Database");
      } else {
        console.log("Error Deleting Review from Database");
      }
    });
    res.json({ msg: "User Deleted" });
  } catch (error) {
    console.error("Review not Found");
    res.status(401).json({ msg: "Review Not Found" });
  }
});

module.exports = router;
