import { Router } from "express";
import {
  getAll,
  create,
  getOne,
  remover,
  update,
} from "../controllers/cliente.controller.js";

const clienteRouter = Router();

//definir rutas

clienteRouter.get("/clientes/", getAll);
clienteRouter.post("/clientes/", create);
clienteRouter.get("/clientes/:id", getOne);
clienteRouter.delete("/clientes/:id", remover);
clienteRouter.put("/clientes/:id", update);
export default clienteRouter;