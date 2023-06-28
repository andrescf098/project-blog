const express = require("express");
const connection = require("./db/connection.js");
const { config } = require("./config/index.js");
const routerApi = require("./routes/index.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routerApi(app);
app.listen(config.port, () => {
  console.log("Server is running on port ", config.port);
});

connection();
