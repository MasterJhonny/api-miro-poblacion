const { config } = require("./keys");

// import modules
const mongoose = require("mongoose");
const db = require("mongoose");

// import model database
const schemaData = require("./model.data");

//  created model
const ModelData = mongoose.model("data", schemaData);

// destructurin config
const { user, password, database } = config;

// definid uri
// const URI = `mongodb+srv://${user}:${password}@cluster0.4c64jok.mongodb.net/?retryWrites=true&w=majority`;
const URI = `mongodb+srv://jhon7dev:2MrcqJYYCQViS5fG@cluster-records-data.ogfrpc8.mongodb.net/?retryWrites=true&w=majority`;

// conected database
db.Promise = global.Promise;
db.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("database yes!!"))
  .catch((err) => console.error("[DATA BASE ERROR]", err));

module.exports = {
  db,
  ModelData,
};
