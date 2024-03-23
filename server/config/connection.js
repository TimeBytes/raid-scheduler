const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/raid-scheduler"
);

module.exports = mongoose.connection;
