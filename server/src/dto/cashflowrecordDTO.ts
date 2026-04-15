import { CashFlowRecord, CashFlowRecordDTO }from '../types' ;


function recordDTO(records: CashFlowRecord[]): CashFlowRecordDTO{
    
    const totalDebit = records
        .filter(d => d.type === 'Debit')
        .reduce((sum, d) => sum + d.amount, 0 );

    const totalCredit = records
        .filter (c => c.type === 'Credit')
        .reduce((sum, c) => sum + c.amount, 0);

    return{
        records,
        totalCredit,
        totalDebit,
        netAmount: totalDebit - totalCredit
    };
}

export default recordDTO;