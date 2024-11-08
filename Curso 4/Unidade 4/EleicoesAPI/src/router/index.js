import { Router } from "express";
import candidatoRouter from "./CandidatoRouter.js";

const router = Router();

router.use("/candidato", candidatoRouter);

export default router;