import Joi from "joi";

const eleitorLoginValidator = Joi.object({
    cpf: Joi.string().required(),
    senha: Joi.string().required()
});

export default eleitorLoginValidator;