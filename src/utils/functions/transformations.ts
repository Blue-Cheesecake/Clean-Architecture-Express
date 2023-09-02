import { plainToClass } from "class-transformer";
import { ValidationError, validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import APIResponse from "./apiResponse.js";

export default class Transformations {
  private constructor() {}

  public static convertRequestToDataClass<T>(
    type: new () => T
  ): (req: Request, res: Response, next: NextFunction) => Promise<void> {
    return async (req: Request, res: Response, next: NextFunction) => {
      const instance: T = plainToClass(type, req.body, {
        enableImplicitConversion: true,
      });
      const errors: Array<ValidationError> = await validate(instance as object);

      if (errors.length > 0) {
        // TODO: convert these errors to send the reasons of error in proper format
        APIResponse.badRequest(res, errors);
        return;
      }

      req.body = instance;
      next();
    };
  }
}
