import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import PRODUCT_DI_TYPES from "../utils/dependencies/product_di_types.js";
import ProductService from "../services/product_service.js";
import SimpleMessageModel from "../../../utils/models/simple_message_model.js";

@injectable()
export default class ProductController {
  constructor(
    @inject(PRODUCT_DI_TYPES.ProductService)
    private readonly _productService: ProductService
  ) {}

  public addProduct = async (req: Request, res: Response) => {
    // res.send(<ISimpleMessageEntity>{
    //   message: "JSON Message",
    // });

    res.send(new SimpleMessageModel("JSON MODEL"));
  };

  public fetchAll = async (req: Request, res: Response) => {
    const response = await this._productService.getAllProducts();
    res.send({ response });
  };
}
