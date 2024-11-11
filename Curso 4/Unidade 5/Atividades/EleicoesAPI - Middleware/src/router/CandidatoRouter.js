import { Router } from "express";
import * as candidatoController from "../controller/CandidatoController.js";
import CandidatoValidatorMiddleware from "../middlewares/CandidatoValidatorMiddleware.js";

const candidatoRouter = Router();

candidatoRouter.get("/", candidatoController.findAllCandidato);
candidatoRouter.get("/:id", candidatoController.findCandidatoById);
candidatoRouter.delete("/:id", candidatoController.deleteCandidatoById);
candidatoRouter.post("/", CandidatoValidatorMiddleware, candidatoController.saveCandidato);
candidatoRouter.put("/:id", CandidatoValidatorMiddleware, candidatoController.updateCandidato);

export default candidatoRouter;