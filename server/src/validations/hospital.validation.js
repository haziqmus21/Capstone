const Joi = require("joi");
const { objectId } = require("./custom.validation");

const addHospital = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    city: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.number().required(),
  }),
};
module.exports = { addHospital };
