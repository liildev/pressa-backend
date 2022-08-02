import { fetch } from "../../lib/postgres.js";
import query from "./query.js";

async function LoginUser({ username, password }) {
  try {
    return await fetch(query.LOGINUSER, username, password);
  } catch (e) {
    console.error(e);
  }
}

async function UserRegister({ username, password, role }) {
  try {
    return await fetch(
      query.REGISTER,
      username,
      password,
      role ? role : "USER"
    );
  } catch (e) {
    console.log(e);
  }
}

export { LoginUser, UserRegister };
