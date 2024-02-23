import express from 'express';
import dotenv from 'dotenv';

import userRoute from './routes/userRoute.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('server is ready')
})

app.use('/api/users', userRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
