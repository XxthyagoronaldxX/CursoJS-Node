import { Router } from "express";

const alunoRouter = Router();

alunoRouter.get("/aluno", (req, res) => {
    res.status(200).send();
});

alunoRouter.post("/aluno", (req, res) => {
    res.status(201).send();
});

alunoRouter.delete("/aluno", (req, res) => {
    res.status(200).send();
});

export default alunoRouter;