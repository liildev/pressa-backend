import pg from "pg";
import { pgConfig } from "../config.js";

const { Pool } = pg;

const pool = new Pool(pgConfig);

async function fetchAll(query, ...array) {
  const client = await pool.connect();
  try {
    let { rows } = await client.query(query, array.length ? array : null);
    return rows;
  } catch (error) {
    console.error(error);
  } finally {
    await client.release();
  }
}

async function fetch(query, ...arr) {
  const client = await pool.connect();
  try {
    let {
      rows: [row],
    } = await client.query(query, arr.length ? arr : null);

    return row;
  } catch (e) {
    console.error(e);
  } finally {
    await client.release();
  }
}

export { fetchAll, fetch };
