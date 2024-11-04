import { Router } from "express";
import candidatoRouter from "./candidato_router.js";

const router = Router();

router.use(candidatoRouter);

export default router;