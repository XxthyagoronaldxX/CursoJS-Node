import Joi from "joi";

const updatePerfilValidator = Joi.object({
    id: Joi.number().required(),
    perfil: Joi.number().min(1).max(2).required()
});

export default updatePerfilValidator;