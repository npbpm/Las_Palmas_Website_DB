const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const Review = require("./models/reviewModel");
const connectDB = require("./config/db");

app.use(cors());
app.use(express.json());

//connect to mongoose
connectDB();

//require route
app.use("/", require("./routes/reviewRoute"));
app.use("/api/admin", require("./routes/adminRoute"));
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/delete", require("./routes/deleteRoute"));

// Serve static asses in production

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
