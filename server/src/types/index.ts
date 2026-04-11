//For Data Types and Interfaces

interface CashFlowRecord {
    id: number;
    recdate: Date;
    description: string;
    type: 'Debit' | 'Credit';
    accgrp: number; //FK
    amount: number;
}

interface AccountGroup {
    id: number;
    accname: string;
    description: string;
}

export type { CashFlowRecord, AccountGroup };