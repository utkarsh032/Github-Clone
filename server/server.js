import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session'
import passport from 'passport'
import path from 'path'

import authenticateRoute from './routes/authenticateRoute.js'
import userRoute from './routes/userRoute.js'
import exploreRoute from './routes/exploreRoute.js'
import connectMongoDB from './db/connectMongoDB.js';

import './passport/githubAuth.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000
const __dirname = path.resolve()
console.log('__dirname', __dirname)

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())

app.use('/api/auth', authenticateRoute)
app.use('/api/users', userRoute)
app.use('/api/explore', exploreRoute)


//////////////////////////////////////////////////////////////
// DEPLOY PRODUCTION //
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.join(__dirname, "/client/dist")))

  // any routes that is not api will be redirect to index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', "dist", "index.html"))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running')
  })
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB()
})