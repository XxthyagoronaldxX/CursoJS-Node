import Joi from "joi";

const eleitorLoginDtoValidator = Joi.object({
    cpf: Joi.string().required(),
    senha: Joi.string().required()
});

export default eleitorLoginDtoValidator;