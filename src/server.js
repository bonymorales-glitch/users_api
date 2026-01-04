import app from "./app.js";
import { connectDB } from "./db/connect.js";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(app.get("port"), () => {
      console.log(
        `Servidor corriendo en puerto http://localhost:${app.get("port")}`
      );
    });
  } catch (error) {
    console.error("No fue posible la conexion al servidor", error);
    process.exit(1);
  }
};

startServer();
