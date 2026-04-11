//Points Client requests to the appropriate controller (URL)

import { Router } from 'express';
import { createRecord, getRecords, updateRecord, deleteRecord } from '../controllers/cashflowrec';

const router = Router();

router.get('/cashflow', getRecords);
router.post('/cashflow', createRecord);
router.put('/cashflow/:id', updateRecord);
router.delete('/cashflow/:id', deleteRecord);

export default router;