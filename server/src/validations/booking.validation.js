const Joi = require("joi");
const { objectId } = require("./custom.validation");

const addBooking = {
  body: Joi.object().keys({
    date: Joi.string().required(),
    time: Joi.string().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    doctorName: Joi.string().required(),
  }),
};
module.exports = { addBooking };
