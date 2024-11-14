import { Router } from "express";
import * as candidatoController from "../controller/CandidatoController.js";
import validatorMiddleware from "../middlewares/ValidatorMiddleware.js";
import candidatoValidator from "../validators/CandidatoValidator.js";
import EleitorAuthMiddleware from "../middlewares/EleitorAuthMiddleware.js";
import AdminAuthMiddleware from "../middlewares/AdminAuthMiddleware.js";

const candidatoRouter = Router();

// ELEITOR & ADMIN
candidatoRouter.get("/", EleitorAuthMiddleware, candidatoController.findAllCandidato);
candidatoRouter.get("/:id", EleitorAuthMiddleware, candidatoController.findCandidatoById);

// ADMIN
candidatoRouter.delete("/:id", AdminAuthMiddleware, candidatoController.deleteCandidatoById);
candidatoRouter.post("/", AdminAuthMiddleware, validatorMiddleware(candidatoValidator), candidatoController.saveCandidato);
candidatoRouter.put("/:id", AdminAuthMiddleware, validatorMiddleware(candidatoValidator), candidatoController.updateCandidato);

export default candidatoRouter;