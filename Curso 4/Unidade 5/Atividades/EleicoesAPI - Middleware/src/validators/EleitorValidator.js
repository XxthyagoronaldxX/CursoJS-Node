import Joi from "joi";

const eleitorValidator = Joi.object({
    nome: Joi.string().required(),
    cpf: Joi.string().required(),
    senha: Joi.string().required()
});

export default eleitorValidator;