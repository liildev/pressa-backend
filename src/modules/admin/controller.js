import { LoginUser } from './model.js';
import jwt from '../../lib/jwt.js';

async function LOGIN(req, res) {
  try {
    console.log(req.body);
    let user = await LoginUser(req.body);
    if (user) {
      delete user.password;
      res.status(200).json({
        status: 200,
        message: '',
        token: jwt.sign({ admin_id: user.admin_id }),
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


async function REGISTER(req, res, next) {
  try {
    let newUser = await model.UserRegister(req.body);
    delete newUser?.password;
    if (newUser) {
      res.status(200).json({
        status: 200,
        message: "You are registered",
        token: jwt.sign({ userId: newUser.user_id, role: newUser.role }),
        data: newUser,
      });
    } else {
      next(ApiError.unauthorized("Client Error"));
    }
  } catch (error) {
    next(ApiError.internal(error.message));
  }
}
export default { LOGIN, REGISTER };