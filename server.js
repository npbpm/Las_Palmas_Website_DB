const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const Review = require("./models/reviewModel");
const connectDB = require("./config/db");

app.use(cors());
app.use(express.json());

//connect to mongoose
connectDB();

//require route
app.use("/", require("./routes/reviewRoute"));

// Serve static asses in production

app.delete("/api/delete/:id", function (req, res) {
  const id = mongoose.Types.ObjectId(req.params.id);
  Review.findByIdAndDelete(id, function (err) {
    if (!err) {
      console.log("No Error");
    } else {
      console.log("Error");
    }
  });
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("website-palmas/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "website-palmas", "build", "index.html")
    );
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log("Express server running on port " + PORT);
});
