import { Router } from "express";
import candidatoRouter from "./CandidatoRouter.js";

const router = Router();

router.use(candidatoRouter);

export default router;