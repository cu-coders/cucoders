const express = require("express");
const user_apis = require("../controllers/user_db_apis");
const passport = require("passport");
const passportConfig = require("../configs/passport_config");
const user = require("../models/users");
const router = express.Router();

//----------------------------------------END OF IMPORT--------------------------------------------//

//------------------------------------------MIDDLEWARES--------------------------------------------//

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

//---------------------------------------END OF MIDDLEWARES----------------------------------------//

// to register new users
router.post("/signup", (req, res) => {
  user_apis.register(req, res);
});

//-----------------------------------GOOGLE AUTHENTICATION ROUTES--------------------------------//
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  console.log(req.user);
  //res.json({username:req.user.firstname,email:req.user.email})
  res.redirect(process.env.HOME_PAGE);
});
//-----------------------------------END OF GOOGLE AUTHENTICATION ROUTES-------------------------//

//--------------------------------------- GITHUB AUTHENTICATION ROUTES---------------------------//

router.get("/github", passport.authenticate("github"));
router.get("/github/redirect/", passport.authenticate("github"), (req, res) => {
  res.redirect(process.env.HOME_PAGE);
});
//----------------------------------- END OF GITHUB AUTHENTICATION ROUTES------------------------//

// to verify emails of new users
router.get("/verify", (req, res) => {
  user_apis.verify_mail(req, res);
});

// to get user corresponding to client session data
router.get("/user", (req, res) => {
  if (!req.user) {
    res.json({ username: null });
    console.log("Unknown User");
  } else {
    if(req.user.isactive){
          res.json({ username: req.user.firstname });
          console.log("User: " + req.user.firstname);
    }
    else{
      console.log("Please confirm you mail first")
      res.json({ mail_err: "Please confirm you mail first" });
    }

  }
});

//--------------------------------------EMAIL LOGIN AND LOGOUT ROUTES---------------------------------//

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  //console.log(req.session.user)
  if (req.user.isactive) {
    console.log(req.user);
    req.login(req.user, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("logged in");
      res.redirect(process.env.HOME_PAGE); // redirection not working need to fix it
    });
  } else {
    res.send("Please verify your email");
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.LOGIN_PAGE);
});

//------------------------------------END OF EMAIL LOGIN AND LOGOUT ROUTES----------------------------------------//

module.exports = router;
