import { Router } from "express";
import * as candidatoController from "../controller/CandidatoController.js";

const candidatoRouter = Router();

candidatoRouter.get("/", candidatoController.findAllCandidato);
candidatoRouter.get("/:id", candidatoController.findCandidatoById);

export default candidatoRouter;