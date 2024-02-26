const {body,param}=require("express-validator");
exports.dataValidation = [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isString().withMessage("Password should be a string")
    .isLength({ min: 8 }).withMessage("Password should be at least 8 characters long"),
    body("fullname").trim().not().isEmpty().isAlpha().withMessage("Name should be a alphptic"),
    body("image").optional().isString().withMessage("Image path should be a string")
];



exports.updateValidation = [
    body("email").optional().isEmail().withMessage("Invalid email address"),
    body("password").optional().isString().withMessage("Password should be a string")
    .isLength({ min: 8 }).withMessage("Password should be at least 8 characters long"),
    body("fullname").optional().trim().not().isEmpty().isAlpha().withMessage("Name should be a alphptic"),
    body("image").optional().optional().isString().withMessage("Image path should be a string")
];

exports.paramValidation = [
    param("id").custom(value => {
        if (!Number.isInteger(Number(value)) || value <= 0) {
            throw new Error("ID should be a positive integer");
        }
        return true;
    })
];