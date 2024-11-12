import { Router } from "express";
import * as eleitorController from "../controller/EleitorController.js";
import validatorMiddleware from "../middlewares/ValidatorMiddleware.js";
import eleitorValidator from "../validators/EleitorValidator.js";
import eleitorLoginDtoValidator from "../validators/EleitorLoginDTOValidator.js";
import updateSenhaDTOValidator from "../validators/UpdateSenhaDTOValidator.js";

const eleitorRouter = Router();

eleitorRouter.get("/", eleitorController.findAllEleitor);
eleitorRouter.get("/:id", eleitorController.findEleitorById);
eleitorRouter.delete("/:id", eleitorController.deleteEleitorById);
eleitorRouter.post("/", validatorMiddleware(eleitorValidator), eleitorController.saveEleitor);
eleitorRouter.put("/:id", validatorMiddleware(eleitorValidator), eleitorController.updateEleitor);
eleitorRouter.post("/login", validatorMiddleware(eleitorLoginDtoValidator), eleitorController.loginEleitor);
eleitorRouter.put("/:id/senha", validatorMiddleware(updateSenhaDTOValidator), eleitorController.updateEleitorOnSenha);

export default eleitorRouter;