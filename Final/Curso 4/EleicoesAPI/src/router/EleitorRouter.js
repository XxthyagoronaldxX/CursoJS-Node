import { Router } from "express";
import * as eleitorController from "../controller/EleitorController.js";
import validatorMiddleware from "../middlewares/ValidatorMiddleware.js";
import eleitorValidator from "../validators/EleitorValidator.js";
import eleitorLoginValidator from "../validators/EleitorLoginValidator.js";
import updateSenhaValidator from "../validators/UpdateSenhaValidator.js";
import EleitorAuthMiddleware from "../middlewares/EleitorAuthMiddleware.js";
import AdminAuthMiddleware from "../middlewares/AdminAuthMiddleware.js";
import updateEleitorValidator from "../validators/UpdateEleitorValidator.js";
import updatePerfilValidator from "../validators/UpdatePerfilValidator.js";

const eleitorRouter = Router();

// ELEITOR & ADMIN
eleitorRouter.get("/", EleitorAuthMiddleware, eleitorController.findAllEleitor);
eleitorRouter.get("/:id", EleitorAuthMiddleware, eleitorController.findEleitorById);
eleitorRouter.put("/senha", EleitorAuthMiddleware, validatorMiddleware(updateSenhaValidator), eleitorController.updateEleitorOnSenha);
eleitorRouter.put("/", EleitorAuthMiddleware, validatorMiddleware(updateEleitorValidator), eleitorController.updateEleitorByEleitor);

// ADMIN 
eleitorRouter.delete("/:id", AdminAuthMiddleware, eleitorController.deleteEleitorById);
eleitorRouter.put("/perfil", AdminAuthMiddleware, validatorMiddleware(updatePerfilValidator), eleitorController.updateEleitorOnPerfil);
eleitorRouter.put("/:id", AdminAuthMiddleware, validatorMiddleware(eleitorValidator), eleitorController.updateEleitorByAdmin);

// PUBLIC 
eleitorRouter.post("/", validatorMiddleware(eleitorValidator), eleitorController.saveEleitor);
eleitorRouter.post("/login", validatorMiddleware(eleitorLoginValidator), eleitorController.loginEleitor);

export default eleitorRouter;