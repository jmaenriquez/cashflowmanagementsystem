import "dotenv/config";
import express from 'express';
import cors from 'cors';
import pool from "./config/dbcon";
import cashflowroutes from './routes/cashflowrouter';
import accgrouproutes from './routes/accgrouprouter';

const app = express();
app.use(cors());
app.use(express.json());    
app.use('/api', cashflowroutes);
app.use('/api', accgrouproutes);

app.get('/', (req, res) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

pool.connect()
    .then(() => console.log('Connected to postGRE SQL'))
    .catch((err) => console.error('Connection to postGRE SQL failed: ', err))