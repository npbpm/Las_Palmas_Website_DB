const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongo_URI");

const connectDB = async () => {
  console.log(db);
  try {
    await mongoose.connect(db);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;