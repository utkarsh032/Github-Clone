import express from 'express';
import passport from 'passport';

const router = express.Router()

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }),
  function (req, res) {
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL + '/login' }),
  function (req, res) {
    res.redirect('/');
  });


export default router