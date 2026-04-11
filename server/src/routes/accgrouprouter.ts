import { Router } from 'express';
import { createAccGroup, getAccGroups, updateAccGroup, deleteAccGroup } from '../controllers/accgroup';

const router = Router();

router.get('/accounts', getAccGroups);
router.post('/accounts', createAccGroup);
router.put('/accounts/:id', updateAccGroup);
router.delete('/accounts/:id', deleteAccGroup);  

export default router;