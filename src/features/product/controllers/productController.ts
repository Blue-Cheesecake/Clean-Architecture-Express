import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import PRODUCT_DI_TYPES from "../utils/dependencies/productDITypes.js";
import ProductService from "../services/productService.js";
import SimpleMessageModel from "../../../utils/models/simpleMessageModel.js";
import AddProductAPIRequest from "../models/addProductAPIRequest.js";
import ProductMessages from "../utils/constants/productMessages.js";
import APIResponse from "../../../utils/functions/apiResponse.js";

@injectable()
export default class ProductController {
  constructor(
    @inject(PRODUCT_DI_TYPES.ProductService)
    private readonly _productService: ProductService
  ) {}

  public addProduct = async (req: AddProductAPIRequest, res: Response): Promise<void> => {
    await this._productService.addProduct(req.body);

    APIResponse.ok<SimpleMessageModel>(res, new SimpleMessageModel(ProductMessages.success));
  };

  public fetchAll = async (_: Request, res: Response): Promise<void> => {
    const response = await this._productService.getAllProducts();

    APIResponse.ok<Array<object>>(res, response);
  };
}
