import { Router } from "express";
import * as eleicaoController from "../controller/EleicaoController.js";
import * as candidatoEleicaoController from "../controller/CandidatoEleicaoController.js";

const eleicaoRouter = Router();

eleicaoRouter.post("/novo-candidato", candidatoEleicaoController.addCandidatoToEleicao);
eleicaoRouter.put("/remove-candidato", candidatoEleicaoController.removeCandidatoFromEleicao);
eleicaoRouter.get("/:id/summary", eleicaoController.findAllEleicaoSummaryById);

eleicaoRouter.get("/", eleicaoController.findAllEleicao);
eleicaoRouter.get("/:id", eleicaoController.findEleicaoById);
eleicaoRouter.delete("/:id", eleicaoController.deleteEleicaoById);
eleicaoRouter.post("/", eleicaoController.saveEleicao);
eleicaoRouter.put("/:id", eleicaoController.updateEleicao);

export default eleicaoRouter;