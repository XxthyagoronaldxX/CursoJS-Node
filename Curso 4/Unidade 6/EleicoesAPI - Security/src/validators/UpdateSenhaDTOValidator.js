import Joi from "joi";

const updateSenhaDTOValidator = Joi.object({
    id: Joi.number().required(),
    senha: Joi.string().required(),
    novaSenha: Joi.string().required()
});

export default updateSenhaDTOValidator;