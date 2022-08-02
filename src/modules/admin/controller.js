import { LoginUser } from './model.js';
import jwt from '../../lib/jwt.js';

async function LOGIN(req, res) {
  try {
    let user = await LoginUser(req.body);
    if (user) {
      delete user.password;
      res.status(200).json({
        status: 200,
        message: 'You logged',
        token: jwt.sign({ admin_id: user.admin_id , role: user.role}),
        data: user,
      });
    } else {
      res.status(401).json({
        status: 401,
        message: 'wrong user name or password',
        token: null,
      });
    }
  } catch (e) {
    console.error(e);
  }
}


export default { LOGIN };