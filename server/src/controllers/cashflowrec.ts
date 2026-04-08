//This will be the HTTP request handler

import { Request, Response } from 'express';

function createRecord(req: Request, res: Response) {
    // Creates request for add record
     
}

function getRecords(req: Request, res: Response) {
    // request for getting all records from the database
    res.send('Get Records');
}

function updateRecord(req: Request, res: Response) {const {id} = req.params;
    // request for updating an existing transaction in the database
}

function deleteRecord(req: Request, res: Response) {const {id} = req.params;
    // request for deleting a transaction from the database
    res.send('Delete transaction');
}

export { getRecords, createRecord, updateRecord, deleteRecord };
