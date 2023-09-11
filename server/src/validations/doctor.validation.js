const Joi = require("joi");
const { objectId } = require("./custom.validation");

const addDoctor = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    gender: Joi.string().required(),
    field: Joi.string().required(),
    experience: Joi.number().required(),
  }),
};
module.exports = { addDoctor };
