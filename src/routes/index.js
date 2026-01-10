import { Router } from "express";
import clienteRouter from "./cliente.route.js";

const router = Router();

//definir rutas

router.get("/", (req, res) => {
  res.send("Bienvenido a Clientes");
});

router.use("/api/v1", clienteRouter);

export default router;
