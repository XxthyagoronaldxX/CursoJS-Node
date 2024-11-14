import Joi from "joi";

const votoValidator = Joi.object({
    eleicaoId: Joi.number().required(),
    numero: Joi.string().required()
});

export default votoValidator;