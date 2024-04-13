const Joi = require("joi");

const joiObject = (data) => {

    const schema = new Joi.object({
        NAME: Joi.string().trim().required(),
        SURNAME: Joi.string().trim().required(),
        MAIL: Joi.string().trim().email().required(),
        PASSWORD: Joi.string().trim().min(6).max(24).required()
    });

    return schema.validate(data);
}

const validateUserSignUp = (req, res, next) => {

    const { error } = joiObject(req.body);

    error ? res.send({SUCCESSFUL: false, MESSAGE: error.details[0].message}) : next();

}

module.exports = {validateUserSignUp};
