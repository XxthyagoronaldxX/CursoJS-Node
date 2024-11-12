import { Router } from "express";
import * as eleicaoController from "../controller/EleicaoController.js";
import * as candidatoEleicaoController from "../controller/CandidatoEleicaoController.js";
import AdminAuthMiddleware from "../middlewares/AdminAuthMiddleware.js";
import validatorMiddleware from "../middlewares/ValidatorMiddleware.js";
import eleicaoValidator from "../validators/EleicaoValidator.js";

const eleicaoRouter = Router();

eleicaoRouter.post("/novo-candidato", AdminAuthMiddleware, candidatoEleicaoController.addCandidatoToEleicao);
eleicaoRouter.put("/remove-candidato", AdminAuthMiddleware, candidatoEleicaoController.removeCandidatoFromEleicao);
eleicaoRouter.get("/:id/summary", AdminAuthMiddleware, eleicaoController.findAllEleicaoSummaryById);

eleicaoRouter.get("/", eleicaoController.findAllEleicao);
eleicaoRouter.get("/:id", eleicaoController.findEleicaoById);
eleicaoRouter.delete("/:id", eleicaoController.deleteEleicaoById);
eleicaoRouter.post("/", validatorMiddleware(eleicaoValidator), eleicaoController.saveEleicao);
eleicaoRouter.put("/:id", validatorMiddleware(eleicaoValidator), eleicaoController.updateEleicao);

export default eleicaoRouter;