import { Router } from "express";
import * as votoController from "../controller/VotoController.js";

const votoRouter = Router();

votoRouter.post("/", votoController.saveVoto);

export default votoRouter;