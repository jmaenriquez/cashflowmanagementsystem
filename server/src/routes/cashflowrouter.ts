//Points Client requests to the appropriate controller (URL)

import { Router } from 'express';
import { createRecord, getRecords, updateRecord, deleteRecord } from '../controllers/cashflowrec';

const router = Router();

router.get('/record', getRecords);
router.post('/record', createRecord);
router.put('/record/:id', updateRecord);
router.delete('/record/:id', deleteRecord);

export default router;