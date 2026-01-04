import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

//setter

app.set("port", process.env.PORT || 6000);

//middleware

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

//rutas

/*app.get("/", (req, res) => {
  res.send("Hola mundo");
});
*/

app.use(routes);

//manejo de errores

app.use(errorHandler);

export default app;
