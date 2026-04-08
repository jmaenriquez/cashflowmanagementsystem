import { Router } from 'express';
import { createAccGroup, getAccGroups, updateAccGroup, deleteAccGroup } from '../controllers/accgroup';

const router = Router();

router.get('/accgroups', getAccGroups);
router.post('/accgroups', createAccGroup);
router.put('/accgroups/:id', updateAccGroup);
router.delete('/accgroups/:id', deleteAccGroup);  

export default router;