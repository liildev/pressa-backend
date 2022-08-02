import { fetch } from '../../lib/postgres.js';
import LOGINUSER from './query.js';


async function LoginUser({ username, password }) {
  try {
    return await fetch(LOGINUSER, username, password);
  } catch (e) {
    console.error(e);
  }
}

export { LoginUser };