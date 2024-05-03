const Joi = require("joi");

const signUpObject = (data) => {

    const schema = new Joi.object({
        NAME: Joi.string().trim().required(),
        SURNAME: Joi.string().trim().required(),
        MAIL: Joi.string().trim().email().required(),
        PASSWORD: Joi.string().trim().min(6).max(24).required()
    });

    return schema.validate(data);
}

const validateUserSignUp = (req, res, next) => {

    const { error } = signUpObject(req.body);

    error ? res.send({SUCCESSFUL: false, MESSAGE: error.details[0].message}) : next();

}

const signInObject = (data) => {

    const schema = new Joi.object({
        MAIL: Joi.string().trim().email().required(),
        PASSWORD: Joi.string().trim().min(6).max(24).required()
    });

    return schema.validate(data);
}

const validateUserSignIn = (req, res, next) => {

    const { error } = signInObject(req.body);

    error ? res.send({SUCCESSFUL: false, MESSAGE: error.details[0].message}) : next();

}

module.exports = {validateUserSignUp, validateUserSignIn};
