const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/RSS-Feeds", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Database Connected....:)"))
  .catch((err) => console.log(err));

module.exports = {
  mongoose
};
