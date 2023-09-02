import { plainToClass } from "class-transformer";
import { NextFunction, Request, Response } from "express";

export default class Transformations {
  private constructor() {}

  public static convertRequestToDataClass<T>(
    type: new () => T
  ): (req: Request, res: Response, next: NextFunction) => Promise<void> {
    return async (req: Request, _: Response, next: NextFunction) => {
      const instance: T = plainToClass(type, req.body, {
        enableImplicitConversion: true,
      });
      console.log(instance);

      req.body = instance;
      next();
    };
  }
}
