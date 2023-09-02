import { Request, Response } from "express";
import { injectable } from "inversify";
import AppConfig from "../../../config/app_config";

@injectable()
export default class ProductController {
  constructor() {}

  public fetchAll(req: Request, res: Response) {
    res.send({ products: "product list" });
  }
}
