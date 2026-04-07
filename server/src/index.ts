import "dotenv/config";
import express from 'express';
import cors from 'cors';
import pool from './config/dbcon';
import routes from './routes/routes';

const app = express();
app.use(cors());
app.use(express.json());    
app.use(routes);

// Your routes here
app.get('/', (req, res) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});