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

export type { CashFlowRecord, AccountGroup, CashFlowRecordDTO };