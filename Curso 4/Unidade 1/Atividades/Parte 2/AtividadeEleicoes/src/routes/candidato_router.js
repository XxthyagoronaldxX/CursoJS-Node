import { Router } from "express";
import candidatoService from "../service/candidato_service.js";
import HttpStatus from "../utils/HttpStatus.js";

const CandidatoRouter = Router();

CandidatoRouter.get("/candidato", (req, res) => {
    if (req.query.number != undefined) {
        const number = parseInt(req.query.number);

        res.status(HttpStatus.OK).send(candidatoService.findCandidatoByNumber(number));
    } else {
        res.status(HttpStatus.OK).send(candidatoService.findAllCandidato());
    }
});

CandidatoRouter.get("/candidato/:id", (req, res) => {
    const id = parseInt(req.params.id);

    res.status(HttpStatus.OK).send(candidatoService.findCandidatoById(id));
});

CandidatoRouter.post("/candidato", (req, res) => {
    const candidato = req.body;

    res.status(HttpStatus.CREATED).send(candidatoService.saveCandidato(candidato));
});

CandidatoRouter.put("/candidato/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const candidato = req.body;

    res.status(HttpStatus.CREATED).send(candidatoService.updateCandidato(id, candidato));
});

CandidatoRouter.delete("/candidato/:id", (req, res) => {
    const id = parseInt(req.params.id);

    candidatoService.deleteCandidatoById(id);

    res.status(HttpStatus.OK).send();
});

CandidatoRouter.put("/candidato/:number", (req, res) => {
    const id = parseInt(req.params.number);

    res.status(HttpStatus.CREATED).send(candidatoService.updateCandidato(id, candidato));
});

CandidatoRouter.post("/candidato/:number", (req, res) => {
    const number = parseInt(req.params.number);

    candidatoService.votarCandidatoByNumber(number);

    res.status(HttpStatus.OK).send();
});

export default CandidatoRouter;