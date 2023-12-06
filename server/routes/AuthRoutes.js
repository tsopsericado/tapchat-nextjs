import { Router } from "express";
import { checkUser } from "../controllers/AuthController.js";

const router = Router();

router.post("/check-ser", checkUser);

export default Router;
