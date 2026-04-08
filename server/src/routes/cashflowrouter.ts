//Points Client requests to the appropriate controller

import { Router } from 'express';
import { createRecord, getRecords, updateRecord, deleteRecord } from '../controllers/cashflowrec';

const router = Router();

router.get('/transactions', getRecords);
router.post('/transactions', createRecord);
router.put('/transactions/:id', updateRecord);
router.delete('/transactions/:id', deleteRecord);

export default router;