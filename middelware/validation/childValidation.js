const {body,param}=require("express-validator");
exports.dataValidation = [
    body("fullname").trim().not().isEmpty().isAlpha().withMessage("Name should contain only letters"),
    body('age').isInt({ min: 4 , max: 8}).withMessage('Age must be a positive integer with min 4 and max 8'),
    body('level').isIn(['PreKG', 'KG1', 'KG2']).withMessage('Level must be one of PreKG, KG1, KG2'),
    body("address.city").isAlpha().withMessage("Invalid city must be string"),
    body("address.street").isString().withMessage("Street should be a string"),
    body("address.building").isString().withMessage(" building should be a string"),
];

exports.updateValidation = [
    body("fullname").optional().trim().not().isEmpty().isAlpha().withMessage("Name should contain only letters"),
    body('age').optional().isInt({ min: 4 , max: 8}).withMessage('Age must be a positive integer with min 4 and max 8'),
    body('level').optional().isIn(['PreKG', 'KG1', 'KG2']).withMessage('Level must be one of PreKG, KG1, KG2'),
    body("address.city").optional().isAlpha().withMessage("Invalid city must be string"),
    body("address.street").optional().isString().withMessage("Street should be a string"),
    body("address.building").optional().isString().withMessage(" building should be a string"),
];


exports.paramValidation = [
    param("id").custom(value => {
        if (!Number.isInteger(Number(value)) || value <= 0) {
            throw new Error("ID should be a positive integer");
        }
        return true;
    })
];