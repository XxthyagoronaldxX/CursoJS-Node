import { Router } from "express";
import * as eleicaoController from "../controller/EleicaoController.js";
import * as candidatoEleicaoController from "../controller/CandidatoEleicaoController.js";
import EleicaoValidatorMiddleware from "../middlewares/EleicaoValidatorMiddleware.js";
import AdminAuthMiddleware from "../middlewares/AdminAuthMiddleware.js";

const eleicaoRouter = Router();

eleicaoRouter.post("/novo-candidato", AdminAuthMiddleware, candidatoEleicaoController.addCandidatoToEleicao);
eleicaoRouter.put("/remove-candidato", AdminAuthMiddleware, candidatoEleicaoController.removeCandidatoFromEleicao);
eleicaoRouter.get("/:id/summary", AdminAuthMiddleware, eleicaoController.findAllEleicaoSummaryById);

eleicaoRouter.get("/", eleicaoController.findAllEleicao);
eleicaoRouter.get("/:id", eleicaoController.findEleicaoById);
eleicaoRouter.delete("/:id", eleicaoController.deleteEleicaoById);
eleicaoRouter.post("/", EleicaoValidatorMiddleware, eleicaoController.saveEleicao);
eleicaoRouter.put("/:id", EleicaoValidatorMiddleware, eleicaoController.updateEleicao);

export default eleicaoRouter;