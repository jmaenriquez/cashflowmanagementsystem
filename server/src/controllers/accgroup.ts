import { Request, Response } from "express";
import *  as accgroup  from '../services/accgroupservice'

async function createAccGroup(req: Request, res: Response){
    
    const { name } = req.body

    try{
        const account = req.body;
        const create = await accgroup.addAccGroup(account);
        res.status(201).json(create);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create ' + name + ' Account'})
    }
}

async function getAccGroups(req: Request, res: Response){
    
    try{
        const fetchData = await accgroup.getAccGroups();
        res.json(fetchData);
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch the Account List'})
    }
}

async function updateAccGroup(req: Request, res: Response){
    
    const { id } = req.params;
    const { name } = req.body

    try{
        const updateAcc = await accgroup.updateAccGroup(Number(id), req.body);
        res.json(updateAcc)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update ' + name + ' Account' })
    }
}

async function deleteAccGroup(req: Request, res: Response){
    
    const { id } = req.params
    const { name } = req.body

    try{
        const deleteAcc = await accgroup.deleteAccGroup(Number(id), req.body);
        res.json(deleteAcc);   
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete ' + name + ' Account' })
    }
}

export { getAccGroups, createAccGroup, updateAccGroup, deleteAccGroup };