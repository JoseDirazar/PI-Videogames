const { Router } = require("express");
const router = Router();
const {singUpUser, loginUser, protected} = require("../controllers/users")

router.post("/singup", singUpUser)

router.post('/login', loginUser)

router.get("/protecteduser", protected)

/* require("dotenv").config();
const { JWT } = process.env;
const { Users } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(409).json({ message: "Datos insuficientes." });
    }

    const emailExist = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (emailExist)
      return res
        .status(400)
        .json({ message: "El correo electrónico ya está registrado." });

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await Users.create({
      email,
      password: hashedPassword,
    });

    const userId = newUser.id;
    const token = jwt.sign({ userId }, JWT);
    return res.json({ token });
  } catch (error) {
    return res.status(409).json({ error: error });
  }
  // Implementar
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(401).send({ message: "Credenciales inválidas." });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send({ message: "Credenciales inválidas." });
    }

    const token = jwt.sign({ userId: user.id }, JWT);

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});


router.get("/protected", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "No se proporcionó un token." });
  }

  try {
    const decodedToken = await jwt.verify(token, JWT);
    res.send({ message: "Solicitud exitosa.", userId: decodedToken.userId });
  } catch (error) {
    return res.status(401).send({ message: "Token inválido." });
  }
}); */

module.exports = router;
