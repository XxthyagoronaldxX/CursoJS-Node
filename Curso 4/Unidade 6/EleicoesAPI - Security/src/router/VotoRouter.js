import { Router } from "express";
import * as votoController from "../controller/VotoController.js";
import validatorMiddleware from "../middlewares/ValidatorMiddleware.js";
import votoValidator from "../validators/VotoValidator.js";

const votoRouter = Router();

votoRouter.post("/", validatorMiddleware(votoValidator), votoController.saveVoto);

export default votoRouter;