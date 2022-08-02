import { fetch } from "../../lib/postgres.js";
import query from "./query.js";

async function LoginUser({ username, password }) {
  try {
    return await fetch(query.LOGINUSER, username, password);
  } catch (e) {
    console.error(e);
  }
}


export { LoginUser };
