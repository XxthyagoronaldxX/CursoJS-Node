import { Router } from "express";
import * as candidatoController from "../controllers/CandidatoController.js";

const candidatoRouter = Router();

candidatoRouter.get("/", candidatoController.findAllCandidato);
candidatoRouter.post("/", candidatoController.saveCandidato);

export default candidatoRouter;