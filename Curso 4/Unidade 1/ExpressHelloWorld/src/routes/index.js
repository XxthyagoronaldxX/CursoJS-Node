import alunoRouter from "./AlunoRouter.js";
import { Router } from "express";

const router = Router();

router.use(alunoRouter);

export default router;
