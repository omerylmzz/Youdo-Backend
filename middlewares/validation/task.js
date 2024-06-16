const Joi = require("joi");

const taskObject = (data) => {

    const schema = new Joi.object({
        TITLE: Joi.string().trim().required(),
        TASK: Joi.string().trim().required(),
        DATE: Joi.string().trim().required(),
        TIME: Joi.string().trim().required(),
        REMINDER: Joi.boolean(),
        LABEL: Joi.string().trim().required()
    });
    
    return schema.validate(data);
}

const validateTask = (req, res, next) => {

    const { error } = taskObject(req.body);

    error ? res.send({SUCCESSFUL: false, MESSAGE: error.details[0].message}) : next();

}

module.exports = {validateTask};
