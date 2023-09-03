import express, { Router } from "express";
import { inject, injectable } from "inversify";
import PRODUCT_DI_TYPES from "../utils/dependencies/ProductDITypes.js";
import ProductController from "../controllers/ProductController.js";
import Transformations from "../../../utils/functions/Transformations.js";
import ProductModel from "../models/ProductModel.js";

@injectable()
export default class ProductRoute {
  private static readonly _prefix = "/product";
  public readonly router: Router = express.Router();

  constructor(
    @inject(PRODUCT_DI_TYPES.ProductController)
    private readonly _productController: ProductController
  ) {
    this.configureRoutes();
  }

  private configureRoutes() {
    this.router.get(ProductRoute._prefix, this._productController.fetchAll);
    this.router.post(
      ProductRoute._prefix,
      Transformations.convertRequestToDataClassMiddleware<ProductModel>(ProductModel),
      this._productController.addProduct
    );
  }
}
