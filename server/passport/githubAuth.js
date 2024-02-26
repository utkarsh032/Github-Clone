import passport from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github2'
import dotenv from 'dotenv'
dotenv.config()

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/api/auth/github/callback"
},
  function (accessToken, refreshToken, profile, done) {
    console.log(profile)
  }
));