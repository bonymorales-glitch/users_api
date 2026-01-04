import { catchError } from "../middlewares/catchError.js";
import User from "../models/user.model.js";

export const getAll = catchError(async (req, res) => {
  const results = await User.findAll();
  return res.json(results);
});

export const create = catchError(async (req, res) => {
  const result = await User.create(req.body);
  return res.status(201).json(result);
});

export const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await User.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

export const remover = catchError(async (req, res) => {
  const { id } = req.params;
  const deleted = await User.destroy({ where: { id } });
  console.log(deleted);
  if (!deleted) return res.sendStatus(404);
  return res.sendStatus(204);
});

export const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await User.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});
