import Joi from "joi";

const candidatoValidator = Joi.object({
    nome: Joi.string().required(),
    numero: Joi.string().required(),
    partido: Joi.string().required()
});

export default candidatoValidator;