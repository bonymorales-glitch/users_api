import { Router } from "express";
import {
  getAll,
  create,
  getOne,
  remover,
  update,
} from "../controllers/user.controller.js";

const userRouter = Router();

//definir rutas

userRouter.get("/users/", getAll);
userRouter.post("/users/", create);
userRouter.get("/users/:id", getOne);
userRouter.delete("/users/:id", remover);
userRouter.put("/users/:id", update);

export default userRouter;
