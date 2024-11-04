import Joi from "joi";

const candidatoValidator = Joi.object({
    name: Joi.string().required(),
    vote: Joi.number().required(),
    number: Joi.number().required()
});

export default candidatoValidator;