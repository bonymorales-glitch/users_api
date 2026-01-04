import { Router } from "express";
import userRouter from "./user.route.js";

const router = Router();

//definir rutas

router.get("/", (req, res) => {
  res.send("Bienvenido a Usuarios");
});

router.use("/api/v1", userRouter);

export default router;
