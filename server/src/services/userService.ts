import pool from "../config/dbcon";
import { Users } from "../types"

async function addUser(user: Users){
    const {fname, lname, contact, email, password} = user;

    const result = await pool.query(
        `INSERT INTO users (fname, lname, contact, email, pass)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
         [fname, lname, contact, email, password]
    )
    return result.rows[0];
}

export { addUser }