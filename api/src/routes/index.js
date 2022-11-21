const { Router } = require("express");
const {
  getDogsToRouter,
  getDogToRouter,
  createDogToRouter,
} = require("../controllers/dogs-controller.js");
const {
  getTemperaments,
} = require("../controllers/temperaments-controller.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", getDogsToRouter);

router.get("/dogs/:id", getDogToRouter);

router.post("/dogs", createDogToRouter);

router.get("/temperaments", getTemperaments);

module.exports = router;
