const express = require("express");
const user_apis = require("../controllers/user_apis");
const user = require("../models/users");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// to authenticate the user-cookie tokens to identify the user
router.get("/token", (req, res) => {
  user_apis.authenticate(req, res);
});

// to register new users
router.post("/signup", (req, res) => {
  user_apis.register(req, res);
});

// to verify emails of new users
router.get("/verify", (req, res) => {
  user_apis.verify_mail(req, res);
});
module.exports = router;
