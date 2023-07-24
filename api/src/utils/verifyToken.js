//--- Este middleware lo realizamos al final pero lo agregamos por encima de las rutas, aquí mismo ----------------------------------------------------------------------------------------
// Middleware para verificar el token JWT en las solicitudes protegidas
require('dotenv').config()
const {JWT} = process.env

const jwt = require('jsonwebtoken')
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "No se proporcionó un token." });
  }

  try {
    //const decodedToken = jwt.verify(token, JWT);
    // req.userId = decodedToken.userId;
    // next();
    // // Versión con variable de entorno
        jwt.verify(token, JWT, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
      })
  } catch (error) {
    return res.status(401).send({ message: "Token inválido." });
  }
}

module.exports = {
    verifyToken
}