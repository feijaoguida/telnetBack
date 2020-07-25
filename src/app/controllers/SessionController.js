const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const connection = require("../database/connection");
const authConfig = require("../config/auth");
class SessionController {
  async create(req, res) {
    //email and password from body
    const { email, passwordUser } = req.body;
    const [user] = await connection("user").where({ email: email }).select("*");

    //this is password from db, hash
    const { id, name, password } = user;

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrato" });
    }

    function checkPassword(passwordUser) {
      return bcrypt.compare(passwordUser, password);
    }

    if (!(await checkPassword(passwordUser))) {
      return res.status(401).json({ error: "Senha não confere" });
    }

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();
