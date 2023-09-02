import {
  ClassConstructor,
  ClassTransformOptions,
  instanceToPlain,
  plainToClass,
  plainToInstance,
} from "class-transformer";
import { ValidationError, validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import APIResponse from "./apiResponse.js";
import BaseModel from "../models/baseModel.js";

export default class Transformations {
  private constructor() {}

  public static modelToObject<T>(body: T): object {
    return instanceToPlain(body);
  }

  public static entityToModel<T, E>(
    cls: ClassConstructor<T>,
    plain: E,
    options?: ClassTransformOptions | undefined
  ): T {
    return plainToInstance(
      cls,
      plain,
      options ?? {
        excludeExtraneousValues: true,
      }
    );
  }

  public static entityToObject<T extends BaseModel, E>(
    cls: ClassConstructor<T>,
    plain: E,
    options?: ClassTransformOptions | undefined
  ): object {
    return this.entityToModel(cls, plain, options).toObject();
  }

  public static convertRequestToDataClassMiddleware<T>(
    type: new () => T
  ): (req: Request, res: Response, next: NextFunction) => Promise<void> {
    return async (req: Request, res: Response, next: NextFunction) => {
      const instance: T = plainToClass(type, req.body, {
        excludeExtraneousValues: true,
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
