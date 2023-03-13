const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
});

// modelOjectName=mongoose.model(<Collectionname>, <CollectionSchema>)
const Userdb = mongoose.model("Userdb", Schema);

module.exports = Userdb;
