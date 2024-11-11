import { Router } from "express";
import * as eleitorController from "../controller/EleitorController.js";
import validatorMiddleware from "../middlewares/ValidatorMiddleware.js";
import eleitorValidator from "../validators/EleitorValidator.js";

const eleitorRouter = Router();

eleitorRouter.get("/", eleitorController.findAllEleitor);
eleitorRouter.get("/:id", eleitorController.findEleitorById);
eleitorRouter.delete("/:id", eleitorController.deleteEleitorById);
eleitorRouter.post("/", validatorMiddleware(eleitorValidator), eleitorController.saveEleitor);
eleitorRouter.put("/:id", validatorMiddleware(eleitorValidator), eleitorController.updateEleitor);

export default eleitorRouter;