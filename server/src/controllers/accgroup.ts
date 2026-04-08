import { Request, Response } from "express";

function createAccGroup(req: Request, res: Response){ const {accname} = req.body;
    //Add logic to create a new account group in the database
}

function getAccGroups(req: Request, res: Response){
    //for fetching list of account groups from the database
    res.send('Get account groups');
}

function updateAccGroup(req: Request, res: Response){const {id} = req.params;
    //For updating an existing account group in the database
}

function deleteAccGroup(req: Request, res: Response){const {id} = req.params;
    //For deleting an account group from the database
}

export { getAccGroups, createAccGroup, updateAccGroup, deleteAccGroup };

