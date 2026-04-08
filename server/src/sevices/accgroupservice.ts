import pool from "../config/dbcon";
import { AccountGroup } from "../types";

async function addAccGroup(acc: AccountGroup) {
    const {name, description} = acc;

    const result = await pool.query(
        `INSERT INTO accountgroups (name, description)
        VALUES ($1,$2)
        RETURNING *'`,
        [name, description]
    );

    return result.rows[0];
}

async function getAccGroups() {
    const result = await pool.query(`SELECT * FROM accountgroups`);
    return result.rows;
}

async function updateAccGroup(id:number, acc: AccountGroup){
    const {name, description} = acc;

    const result = await pool.query(
        `UPDATE accountgroups
        SET name = $1, description = $2
        WHERE id - $3
        RETURNING *`,
        [name, description, id]
    );

    return result.rows[0]
}

async function deleteAccGroup(id: number, acc: AccountGroup) {
    const { name } = acc;
    await pool.query(
        `DELETE FROM accountgroups WHERE id = $1`, [id],
    )

    return { message: name + ' deleted successfully' };
}

export { addAccGroup, getAccGroups, updateAccGroup, deleteAccGroup };