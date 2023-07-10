const db = require("mongoose");
const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.vde6448.mongodb.net/db_blog?retryWrites=true&w=majority`;
db.set("strictQuery", false);
db.Promise = global.Promise;

const connect = async () => {
  try {
    const connectDB = await db.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connectDB) {
      console.log("Connect to database successfully");
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = connect;
