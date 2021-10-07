const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/users");

//-------------------------------------------------END OF IMPORTS---------------------------------------------//

//----------------------------------------------GOOGLE OAUTH STRATEGY-----------------------------------------//
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      User.findOne({ email: profile.emails[0].value }).then((oldUser) => {
        if (oldUser) {
          console.log("Old User", oldUser._id);
          done(null, oldUser._id);
        } else {
          new User({
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            email: profile.emails[0].value,
            third_partyID: profile.id,
            auth_type: "google",
            password: null,
            mailtoken: null,
            isactive: true,
          })
            .save()
            .then((newUser) => {
              console.log("New User", newUser);

              done(null, newUser._id);
            });
        }
      });
    }
  )
);
//-------------------------------------END OF GOOGLE OAUTH STRATEGY-----------------------------------//

//----------------------------------------- GITHUB STRATEGY------------------------------------------//

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/redirect",
      scope: ["user:email"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      User.findOne({ email: profile.emails[0].value }).then((oldUser) => {
        if (oldUser) {
          // User with the same email already exists
          console.log("Old User ID: " + oldUser._id);
          done(null, oldUser);
        } else {
          // New User
          new User({
            firstname: profile.displayName,
            lastname: null,
            email: profile.emails[0].value,
            third_partyID: profile.id,
            auth_type: "github",
            password: null,
            mailtoken: null,
            isactive: true,
          })
            .save()
            .then((newUser) => {
              console.log("New User ID: " + newUser._id);
              done(null, newUser._id);
            });
        }
      });
    }
  )
);

//--------------------------------------END OF GITHUB STRATEGY----------------------------------------//

//-------------------------------------------LOCAL STRATEGY-------------------------------------------//
passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password", session: true },
    (email, password, done) => {
      //console.log("At login middleware");
      User.findOne({ email: email }, (err, user) => {
        //console.log(user)
        if (err) {
          //console.log(err)
          return done(err);
        }
        if (!user) {
          console.log("Invalid credentials");
          return done(null, false);
        } else {
          if (!user.password) {
            console.log("Authentication failed");
            return done(null, false, { message: "Invalid credentials" });
          }
          bcrypt.compare(password, user.password).then((isValid) => {
            console.log(isValid);
            if (isValid) {
              console.log("authorized");
              return done(null, user._id);
            } else {
              console.log("Authentication Failed");
              return done(null, false, { message: "Invalid Credentials" });
            }
          });
        }
      });
    }
  )
);
//--------------------------------------------------END  OF LOCAL STRATEGY----------------------------------------//
//------------------------------------------------SERIALIZERS AND DESERIALIZERS-----------------------------------//
passport.serializeUser((id, done) => {
  //console.log(id);
  done(null, id);
});

passport.deserializeUser((id, done) => {
  //console.log(id)
  //console.log("Deserializing the session data");
  User.findById(id).then((user) => {
    if (user) {
      done(null, user);
    }
  });
});
//------------------------------------------END OF SERIALIZERS AND DESERIALIZERS----------------------------------//
