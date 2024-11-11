import { Router } from "express";
import * as candidatoController from "../controller/CandidatoController.js";

const candidatoRouter = Router();

candidatoRouter.get("/", candidatoController.findAllCandidato);
candidatoRouter.get("/:id", candidatoController.findCandidatoById);
candidatoRouter.delete("/:id", candidatoController.deleteCandidatoById);
candidatoRouter.post("/", candidatoController.saveCandidato);
candidatoRouter.put("/:id", candidatoController.updateCandidato);

export default candidatoRouter;