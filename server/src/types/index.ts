//For Data Types and Interfaces

interface CashFlowRecord {
    id: number;
    date: Date;
    description: string;
    accType: 'Debit' | 'Credit';
    accGroup: number; //FK
    amount: number;
}

interface AccountGroup {
    id: number;
    name: string;
    description: string;
}

export type { CashFlowRecord, AccountGroup };