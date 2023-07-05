const express = require("express");
const connection = require("./db/connection.js");
const cors = require("cors");
const { config } = require("./config/index.js");
const routerApi = require("./routes/index.js");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/error.handler");

const app = express();

const whiteListCORS = ["http://localhost:5173"];
const options = {
  origin: (origin, callback) => {
    if (whiteListCORS.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed"));
    }
  },
};
app.use(cors(options));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routerApi(app);
app.listen(config.port, () => {
  console.log("Server is running on port ", config.port);
});

connection();

require("./utils/auth/auth.util.js");

app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);
