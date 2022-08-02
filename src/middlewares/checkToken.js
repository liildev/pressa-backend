import jwt from "../lib/jwt.js";

function checkToken(req, res, next) {
  try {
    if (req.method != "GET" && req.url != "/admin") {
      let { token } = req.headers;
      if (!token) throw new Error("token required");
      let { admin_id } = jwt.verify(token);
      req.adminId = admin_id;
      return next();
    } else {
      return next();
    }
  } catch (e) {
    console.error(e);
  }
}

export default checkToken;
