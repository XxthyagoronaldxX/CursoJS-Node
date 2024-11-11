import { Router } from "express";
import * as eleitorController from "../controller/EleitorController.js";

const eleitorRouter = Router();

eleitorRouter.get("/", eleitorController.findAllEleitor);
eleitorRouter.get("/:id", eleitorController.findEleitorById);
eleitorRouter.delete("/:id", eleitorController.deleteEleitorById);
eleitorRouter.post("/", eleitorController.saveEleitor);
eleitorRouter.put("/:id", eleitorController.updateEleitor);

export default eleitorRouter;