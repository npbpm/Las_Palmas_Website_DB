const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect(
  "mongodb+srv://palmas:riMK5ZWHErheLdWb@las-palmas-website.oi3ax9i.mongodb.net/reviewsDB"
);

//require route
app.use("/", require("./routes/reviewRoute"));

// Serve static asses in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "website-palmas/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "website-palmas", "build", "index.html")
    );
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log("Express server running on port 3001");
});
