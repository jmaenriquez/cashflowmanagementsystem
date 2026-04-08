import { Router } from 'express';
import { createRecord, getRecords, updateRecord, deleteRecord } from '../controllers/recordcontrollers';

const router = Router();

router.get('/transactions', getRecords);
router.post('/transactions', createRecord);
router.put('/transactions/:id', updateRecord);
router.delete('/transactions/:id', deleteRecord);

export default router;