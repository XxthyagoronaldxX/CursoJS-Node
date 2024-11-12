import { Router } from "express";
import * as candidatoController from "../controller/CandidatoController.js";
import validatorMiddleware from "../middlewares/ValidatorMiddleware.js";
import candidatoValidator from "../validators/CandidatoValidator.js";

const candidatoRouter = Router();

candidatoRouter.get("/", candidatoController.findAllCandidato);
candidatoRouter.get("/:id", candidatoController.findCandidatoById);
candidatoRouter.delete("/:id", candidatoController.deleteCandidatoById);
candidatoRouter.post("/", validatorMiddleware(candidatoValidator), candidatoController.saveCandidato);
candidatoRouter.put("/:id", validatorMiddleware(candidatoValidator), candidatoController.updateCandidato);

export default candidatoRouter;