const {body}=require("express-validator");
exports.validateLogin = [
    body("email")
    .notEmpty()
    .withMessage("email required")
    .toLowerCase()
    .isEmail().withMessage("Invalid Email"),
    body("password")
    .notEmpty()
    .withMessage("password is required")
    //.isStrongPassword().withMessage("Invalid password")
]

exports.validateSignup = [
    body("fullname").trim().not().isEmpty().isAlpha().withMessage("Name should be a alphptic"),
    body("email")
    .notEmpty()
    .withMessage("email required")
    .toLowerCase()
    .isEmail().withMessage("Invalid Email"),
    body("password")
    .notEmpty()
    .withMessage("password is required")
    .isStrongPassword().withMessage("Invalid password")
]

exports.changePassword = [
    body("password")
    .notEmpty()
    .withMessage("password is required")
    .isStrongPassword().withMessage("Invalid password")
]