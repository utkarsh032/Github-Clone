import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/userRoute.js'
import exploreRoute from './routes/exploreRoute.js'

dotenv.config();

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('server is ready')
})

app.use('/api/users', userRoute)
app.use('/api/explore', exploreRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
