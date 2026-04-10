//This will contact the database and create business logic

import pool from '../config/dbcon';
import { CashFlowRecord } from '../types';

async function addRecord(record: CashFlowRecord) {
    const { recdate, description, type, accgroup, amount } = record;
    const result = await pool.query(
        `INSERT INTO cashflowrecords (date, description, accType, accGroup, amount)
        VALUES($1,$2,$3,$4,$5) RETURNING *`,
        [recdate, description, type, accgroup, amount]
    );

    return result.rows[0];
}

async function getRecords(){
    const result = await pool.query(`SELECT * FROM cashflowrecords`);
    return result.rows;
}

async function updateRecord(id: number, record: Partial<CashFlowRecord>) {
    const { recdate, description, type, accgroup, amount } = record;
    const result = await pool.query(
        `UPDATE cashflowrecords
        SET recdate = $1, description = $2, type = $3, accgroup = $4, amount = $5
        WHERE id = $6
        RETURNING *`,

        [recdate, description, type, accgroup, amount, id]
    );

    return result.rows[0];
}

async function deleteRecord(id: number) {
    await pool.query(
        `DELETE FROM cashflowrecords WHERE id = $1`, [id],
    )

    return { message: 'Record No. ' + id + ' deleted successfully' };
}
export { addRecord, getRecords, updateRecord, deleteRecord };