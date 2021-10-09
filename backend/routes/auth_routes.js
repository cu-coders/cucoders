const express = require("express");
const user_apis = require("../controllers/user_db_apis");
const passport = require("passport");
const passportConfig = require("../configs/passport_config"); // for passport functionalities
// ***Don't remove*
const router = express.Router();

//----------------------------------------END OF
//IMPORT--------------------------------------------//

//------------------------------------------MIDDLEWARES--------------------------------------------//

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

//---------------------------------------END OF
//MIDDLEWARES----------------------------------------//

// to register new users
router.post("/signup", (req, res) => {
  user_apis.register(req, res);
});

//-----------------------------------GOOGLE AUTHENTICATION
//ROUTES--------------------------------//
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  console.log(req.user);
  // res.json({username:req.user.firstname,email:req.user.email})
  res.redirect(process.env.HOME_PAGE);
});
//-----------------------------------END OF GOOGLE AUTHENTICATION
//ROUTES-------------------------//

//--------------------------------------- GITHUB AUTHENTICATION
//ROUTES---------------------------//

router.get("/github", passport.authenticate("github"));
router.get("/github/redirect/", passport.authenticate("github"), (req, res) => {
  res.redirect(process.env.HOME_PAGE);
});
//----------------------------------- END OF GITHUB AUTHENTICATION
//ROUTES------------------------//

// to verify emails of new users
router.get("/verify", (req, res) => {
  user_apis.verify_mail(req, res);
});

// to get user corresponding to client session data
router.get("/user", (req, res) => {
  if (!req.user) {
    res.json({ username: null });
  } else {
    if (req.user.isactive) {
      res.json({ username: req.user.firstname });
    } else {
      console.log("Please confirm you mail first");
      res.json({ mail_err: "Please confirm you mail first" });
    }
  }
});

//--------------------------------------EMAIL LOGIN AND LOGOUT
//ROUTES---------------------------------//
router.post("/login", (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({ error: "Invalid credentials", code: 401 });
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.redirect({ error: "Something went wrong", code: 500 });
      }
      return res.json({ success: true });
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.LOGIN_PAGE);
});
//------------------------------------END OF EMAIL LOGIN AND LOGOUT
//ROUTES----------------------------------------//
module.exports = router;
