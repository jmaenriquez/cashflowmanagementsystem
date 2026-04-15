//This will contact the database and create business logic

import pool from '../config/dbcon';
import { CashFlowRecord } from '../types';
import recordDTO from "../dto/cashflowrecordDTO";

async function addRecord(record: CashFlowRecord) {
    const { recdate, description, type, accgrp, amount } = record;
    const result = await pool.query(
        `INSERT INTO cashflowrecords (recdate, description, type, accgrp, amount)
        VALUES($1,$2,$3,$4,$5) RETURNING *`,
        [recdate, description, type, accgrp, amount]
    );

    return result.rows[0];
}

async function getRecords(){
    const result = await pool.query(`
        SELECT
            c.id,
            TO_CHAR(c.recdate, 'YYYY-MM-DD') AS recdate,
            c.description,
            c.type,
            c.accgrp,
            a.accname AS accgrpname,
            c.amount::float AS amount
        FROM cashflowrecords c
        JOIN accgroup a ON c.accgrp = a.id
        `)
    return recordDTO(result.rows);
}

async function updateRecord(id: number, record: Partial<CashFlowRecord>) {
    const { recdate, description, type, accgrp, amount } = record;
    const result = await pool.query(
        `UPDATE cashflowrecords
        SET recdate = $1, description = $2, type = $3, accgrp = $4, amount = $5
        WHERE id = $6
        RETURNING *`,

        [recdate, description, type, accgrp, amount, id]
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