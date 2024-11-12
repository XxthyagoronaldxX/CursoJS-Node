import Joi from "joi";

const eleicaoValidator = Joi.object({
    nome: Joi.string().required(),
    data: Joi.date().required(),
    descricao: Joi.string().required()
});

export default eleicaoValidator;