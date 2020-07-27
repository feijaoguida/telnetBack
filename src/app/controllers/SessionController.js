const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const connection = require("../database/connection");
const authConfig = require("../config/auth");
class SessionController {
  async create(req, res) {
    //email and password from body
    const { email, password } = req.body;
    const [user] = await connection("user").where({ email: email }).select("*");

    console.log("email + passworduser: " + email, password);
    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrato" });
    }

    //this is password from db, hash
    const { id, name, password: passwordHash } = user;
    console.log("User: " + id, name, passwordHash);

    function checkPassword(password) {
      return bcrypt.compare(password, passwordHash);
    }

    if (!(await checkPassword(password))) {
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
