import Joi from "joi";

const updateSenhaValidator = Joi.object({
    senha: Joi.string().required(),
    novaSenha: Joi.string().required()
});

export default updateSenhaValidator;