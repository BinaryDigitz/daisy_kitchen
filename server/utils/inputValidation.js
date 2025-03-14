import Joi from "joi";

export function validateSignup(user){

    const schema = Joi.object({
        fullName: Joi.string().min(5).max(50),
        email:Joi.string().min(6).max(50),
        phone:Joi.string().min(8).max(12),
        password:Joi.string().min(8).max(250)
    })
    return schema.validate(user)
}
export function validateLogin(user){

    const schema = Joi.object({
        email:Joi.string().min(6).max(50),
        password:Joi.string().min(8).max(250)
    })
    return schema.validate(user)
}