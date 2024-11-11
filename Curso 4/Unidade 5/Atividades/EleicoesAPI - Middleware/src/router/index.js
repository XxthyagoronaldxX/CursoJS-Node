import { Router } from "express";
import candidatoRouter from "./CandidatoRouter.js";
import eleitorRouter from "./EleitorRouter.js";
import eleicaoRouter from "./EleicaoRouter.js";
import votoRouter from "./VotoRouter.js";

const router = Router();

router.use("/candidato", candidatoRouter);
router.use("/eleitor", eleitorRouter);
router.use("/eleicao", eleicaoRouter);
router.use("/voto", votoRouter);

export default router;