require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const api_routes = require("./routes/api_routes");
const auth_routes = require("./routes/auth_routes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Demo database: Connect to a actual database before deployment
mongoose
  .connect("mongodb://localhost:27017/events", { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening at PORT: ${PORT}`);
    });
  });

// Whitelisting requests
app.use(
  cors({
    // The following address is for testing only, change it accordingly in production
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(path.join(__dirname + "./public/")));
app.use(cookieParser());
app.use("/api/", api_routes);
app.use("/auth/", auth_routes);
