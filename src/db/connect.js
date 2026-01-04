import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

export const connectDB = async () => {
  await sequelize.authenticate();
  console.log("conexion establecida con la BD");
  await sequelize.sync({ alter: false, force: false }); //sincroniza los datos en la tablas
  console.log("tablas sincronizadas");
};

export default sequelize;
