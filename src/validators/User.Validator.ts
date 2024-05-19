import Joi from "joi";

export const userValidator = Joi.object({
    title:Joi
        .string()
        .pattern(/^[a-z0-9 _-]{1,100}$/)
        .required()
        .messages({
            "string.required.base":"This field is required"
        }),
    body:Joi
        .string()
        .pattern(/^[a-z0-9 _-]+$/)
        .required()
        .messages({
            "string.required.base":"This field is required"
        }),
    userId:Joi
        .number()
        .min(1)
        .max(10)
        .required()
        .messages({
            "number.min":"User ID must be from 1 to 10",
            "number.max":"User ID must be from 1 to 10",
            "number.required":"This field is required"
        })
})