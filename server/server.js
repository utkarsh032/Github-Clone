import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session'
import passport from 'passport'

import authRoute from './routes/authenticateRoute.js'
import userRoute from './routes/userRoute.js'
import exploreRoute from './routes/exploreRoute.js'
import connectMongoDB from './db/connectMongoDB.js';

// import './passport/githubAuth.js'

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())

app.get('/', (req, res) => {
  res.send('server is ready')
})

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/explore', exploreRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB()
})