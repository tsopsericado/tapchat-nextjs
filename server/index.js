import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";

// To load the env variables
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//middleware to access or execute the AuthRoutes
app.use("/api/auth", AuthRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
