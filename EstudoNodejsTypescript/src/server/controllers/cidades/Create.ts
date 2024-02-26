import { Request, Response } from "express";
import Joi from "joi";
import joi from "joi";

interface ICidade {
    cidade: string;
}



export const create = async (req : Request< {}, {}, ICidade >, res : Response) => {
    const cidadeValidation: Joi.AnySchema<ICidade> = joi.object({
        cidade: Joi.string().min(3).max(25).required()
    });
    let validatedData: ICidade = req.body;

    try {
        const validationResult = cidadeValidation.validate(req.body);
        if (validationResult.error) {
            throw validationResult.error;
        }
        validatedData = validationResult.value;
    } catch (error) {
        const joiError = error as joi.ValidationError;
        return res.json({
            errors: {
                default: joiError.message
            }
        });
    }
}