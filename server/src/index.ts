import "dotenv/config";
import express from 'express';
import cors from 'cors';
import pool from './config/dbcon';
import cashflowroutes from './routes/cashflowrouter';
import accgrouproutes from './routes/accgrouprouter';

const app = express();
app.use(cors());
app.use(express.json());    
app.use(cashflowroutes);
app.use(accgrouproutes);

app.get('/', (req, res) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});