import { NextFunction } from "express";
import { AccountGroup } from "../types";

function validateAccount(acc:AccountGroup, req: Request, res: Response, next: NextFunction){
    const { acc, description } = req.body
}