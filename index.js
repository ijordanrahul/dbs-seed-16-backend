const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const db = require("./connection");

const users = require("./src/controller/users/routes");
const claims = require("./src/controller/claims/routes.js");
const insuranceClaimRoutes = require("./src/controller/claims/routes");

const index = express();

index.use(bodyParser.json());
index.use(bodyParser.urlencoded({ extended: false }));

const app = index.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use("/claim", insuranceClaimRoutes);
app.use("/users", users);
app.use("/", claims);

const PORT = process.env.PORT || config.port;

const server = app.listen(PORT, () => {
  db().then(() =>
    console.log("server is running on port", server.address().port)
  );
});
