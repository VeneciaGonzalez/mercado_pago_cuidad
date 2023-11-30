import express from "express"; 
//crea los log de los registros para las soloicitudes,
//registra detalles sobre las solicitudes que se hagan  aplicació recibe, 
import morgan from "morgan";
import path from "path";
import paymentRoutes from "./routes/payment.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(paymentRoutes);
app.use(express.static(path.resolve("src/public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
