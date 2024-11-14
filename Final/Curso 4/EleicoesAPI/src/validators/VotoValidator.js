import Joi from "joi";

const votoValidator = Joi.object({
    eleicaoId: Joi.string().required(),
    numero: Joi.string().required()
});

export default votoValidator;