import Joi from "joi";

const updateEleitorValidator = Joi.object({
    nome: Joi.string().required()
});

export default updateEleitorValidator;