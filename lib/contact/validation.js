import Joi from "joi"

export const contactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email().required(),
  message: Joi.string().required()
});
