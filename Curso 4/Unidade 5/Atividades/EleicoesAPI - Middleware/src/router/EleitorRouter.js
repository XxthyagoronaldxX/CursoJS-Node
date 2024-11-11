import { Router } from "express";
import * as eleitorController from "../controller/EleitorController.js";
import EleitorValidatorMiddleware from "../middlewares/EleitorValidatorMiddleware.js";

const eleitorRouter = Router();

eleitorRouter.get("/", eleitorController.findAllEleitor);
eleitorRouter.get("/:id", eleitorController.findEleitorById);
eleitorRouter.delete("/:id", eleitorController.deleteEleitorById);
eleitorRouter.post("/", EleitorValidatorMiddleware, eleitorController.saveEleitor);
eleitorRouter.put("/:id", EleitorValidatorMiddleware, eleitorController.updateEleitor);

export default eleitorRouter;