import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import PRODUCT_DI_TYPES from "../utils/dependencies/productDITypes.js";
import ProductService from "../services/productService.js";
import SimpleMessageModel from "../../../utils/models/simpleMessageModel.js";
import AddProductAPIRequest from "../models/addProductAPIRequest.js";
import ProductMessages from "../utils/constants/productMessages.js";

@injectable()
export default class ProductController {
  constructor(
    @inject(PRODUCT_DI_TYPES.ProductService)
    private readonly _productService: ProductService
  ) {}

  public addProduct = async (
    req: AddProductAPIRequest,
    res: Response
  ): Promise<void> => {
    console.log(req.body);

    console.log(req.body.name);
    console.log(req.body.version);
    console.log(req.body.type);

    res.send(new SimpleMessageModel(ProductMessages.success));
  };

  public fetchAll = async (_: Request, res: Response): Promise<void> => {
    const response = await this._productService.getAllProducts();
    res.send(response);
  };
}
