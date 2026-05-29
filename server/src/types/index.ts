//For Data Types and Interfaces

interface CashFlowRecord {
    id: number;
    recdate: Date;
    description: string;
    type: 'Debit' | 'Credit';
    accgrp: number; //FK
    amount: number;
}

interface CashFlowRecordDTO{
    records: CashFlowRecord[];
    totalDebit: number;
    totalCredit: number;
    netAmount: number;
}

interface AccountGroup {
    id: number;
    accname: string;
    description: string;
}

interface Users{
    id: number,
    fname: string,
    lname: string,
    contact: number,
    email: string,
    password: string
}

export type { CashFlowRecord, AccountGroup, CashFlowRecordDTO, Users};