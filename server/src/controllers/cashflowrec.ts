//This will be the HTTP request handler

import { Request, Response } from 'express';
import * as cashflowservices from '../services/cashflowservice';

async function createRecord(req: Request, res: Response) {

    try{
        const record = req.body;
        const create = await cashflowservices.addRecord(record);
        res.status(201).json(create);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to save Records'});
    }
}

async function getRecords(req: Request, res: Response) {
    
    try{
        const fetchData = await cashflowservices.getRecords();
        res.json(fetchData);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch Records'});
    }
    
}

async function updateRecord(req: Request, res: Response) {
    
    const { id } = req.params;
    try{
        const updateRec = await cashflowservices.updateRecord(Number(id), req.body);
        res.json(updateRec);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to update Record No.' + id  });
    }
    
}

async function deleteRecord(req: Request, res: Response) {
    
    const { id } = req.params

    try{
        const deleteRec = await cashflowservices.deleteRecord(Number(id));
        res.json(deleteRec);
    }catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to delete Record No.' + id });
    }

}

export { getRecords, createRecord, updateRecord, deleteRecord };
