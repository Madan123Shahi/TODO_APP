const joi = require("joi");

const taskSchema = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  completed: joi.boolean().default(false),
});

const validateTask = (req, res, next) => {
  const { error } = taskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateTask;
