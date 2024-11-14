import { Router } from "express";
import * as votoController from "../controller/VotoController.js";
import validatorMiddleware from "../middlewares/ValidatorMiddleware.js";
import votoValidator from "../validators/VotoValidator.js";
import EleitorAuthMiddleware from "../middlewares/EleitorAuthMiddleware.js";

const votoRouter = Router();

// ELEITOR & ADMIN
votoRouter.post("/", EleitorAuthMiddleware, validatorMiddleware(votoValidator), votoController.saveVoto);

export default votoRouter;