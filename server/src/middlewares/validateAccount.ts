import { NextFunction } from "express";
import { AccountGroup } from "../types";

function validateAccount(acc: AccountGroup, req: Request, res: Response, next: NextFunction){
    const { accname, description } = acc
}