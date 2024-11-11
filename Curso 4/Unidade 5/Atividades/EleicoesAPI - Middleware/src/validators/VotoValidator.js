import Joi from "joi";

const votoValidator = Joi.object({
    eleitorId: Joi.string().required(),
    eleicaoId: Joi.string().required(),
    numero: Joi.string().required()
});

export default votoValidator;