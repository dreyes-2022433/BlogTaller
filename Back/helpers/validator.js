import { body } from "express-validator"
import { validateErrors } from "./validate.error.js"

export const validateComment = [
    body('name', 'Name is required')
        .notEmpty()
        .isLength({ min: 5 }),
    body('content', 'Content is required')
        .notEmpty()
        .isLength({ min: 10 }),
    validateErrors
]