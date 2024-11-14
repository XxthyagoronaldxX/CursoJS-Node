import { Router } from "express";
import * as eleicaoController from "../controller/EleicaoController.js";
import * as candidatoEleicaoController from "../controller/CandidatoEleicaoController.js";
import AdminAuthMiddleware from "../middlewares/AdminAuthMiddleware.js";
import validatorMiddleware from "../middlewares/ValidatorMiddleware.js";
import eleicaoValidator from "../validators/EleicaoValidator.js";
import addCandidatoToEleicaoValidator from "../validators/AddCandidatoToEleicaoValidator.js";
import EleitorAuthMiddleware from "../middlewares/EleitorAuthMiddleware.js";

const eleicaoRouter = Router();

// ELEITOR & ADMIN
eleicaoRouter.get("/", EleitorAuthMiddleware, eleicaoController.findAllEleicao);
eleicaoRouter.get("/:id", EleitorAuthMiddleware, eleicaoController.findEleicaoById);
eleicaoRouter.get("/:id/summary", EleitorAuthMiddleware, eleicaoController.findAllEleicaoSummaryById);

// ADMIN
eleicaoRouter.post("/novo-candidato", AdminAuthMiddleware, validatorMiddleware(addCandidatoToEleicaoValidator), candidatoEleicaoController.addCandidatoToEleicao);
eleicaoRouter.put("/remove-candidato", AdminAuthMiddleware, candidatoEleicaoController.removeCandidatoFromEleicao);
eleicaoRouter.delete("/:id", AdminAuthMiddleware, eleicaoController.deleteEleicaoById);
eleicaoRouter.post("/", AdminAuthMiddleware, validatorMiddleware(eleicaoValidator), eleicaoController.saveEleicao);
eleicaoRouter.put("/:id", AdminAuthMiddleware, validatorMiddleware(eleicaoValidator), eleicaoController.updateEleicao);

export default eleicaoRouter;