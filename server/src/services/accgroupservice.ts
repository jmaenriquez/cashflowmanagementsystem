import pool from "../config/dbcon";
import { AccountGroup } from "../types";

async function addAccGroup(acc: AccountGroup) {
    const {accname, description} = acc;

    const result = await pool.query(
        `INSERT INTO accgroup (accname, description)
        VALUES ($1,$2)
        RETURNING *`,
        [accname, description]
    );

    return result.rows[0];
}

async function getAccGroups() {
    const result = await pool.query(`SELECT * FROM accgroup`);
    return result.rows;
}


async function updateAccGroup(id:number, acc: AccountGroup){
    const {accname, description} = acc;

    const result = await pool.query(
        `UPDATE accgroup
        SET accname = $1, description = $2
        WHERE id - $3
        RETURNING *`,
        [accname, description, id]
    );

    return result.rows[0]
}

async function deleteAccGroup(id: number, acc: AccountGroup) {
    const { accname } = acc;
    await pool.query(
        `DELETE FROM accgroup WHERE id - $1`, [id],
    )

    return { message: accname + ' deleted successfully' };
}

export { addAccGroup, getAccGroups, updateAccGroup, deleteAccGroup };