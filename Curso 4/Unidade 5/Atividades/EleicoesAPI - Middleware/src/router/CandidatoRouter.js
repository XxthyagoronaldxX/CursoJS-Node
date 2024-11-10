import { Router } from "express";
import * as candidatoController from "../controller/CandidatoController.js";
import EleitorAuthMiddleware from "../middlewares/EleitorAuthMiddleware.js";
import AdminAuthMiddleware from "../middlewares/AdminAuthMiddleware.js";
import CandidatoValidatorMiddleware from "../middlewares/CandidatoValidatorMiddleware.js";

const candidatoRouter = Router();

candidatoRouter.get("/", EleitorAuthMiddleware, candidatoController.findAllCandidato);
candidatoRouter.get("/:id", EleitorAuthMiddleware, candidatoController.findCandidatoById);
candidatoRouter.delete("/:id", AdminAuthMiddleware, candidatoController.deleteCandidatoById);
candidatoRouter.post("/", AdminAuthMiddleware, CandidatoValidatorMiddleware, candidatoController.saveCandidato);

export default candidatoRouter;