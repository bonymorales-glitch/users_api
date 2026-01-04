import { DataTypes } from "sequelize";
import sequelize from "../db/connect.js";

const User = sequelize.define(
  "user",
  {
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    foto: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default User;
