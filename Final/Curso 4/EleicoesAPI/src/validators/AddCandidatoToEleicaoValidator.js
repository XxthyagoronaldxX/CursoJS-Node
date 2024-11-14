import Joi from "joi";

const addCandidatoToEleicaoValidator = Joi.object({
    candidatoId: Joi.string().required(),
    eleicaoId: Joi.string().required()
});

export default addCandidatoToEleicaoValidator;