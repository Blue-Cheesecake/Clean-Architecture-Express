import express, { Router } from "express";
import { inject, injectable } from "inversify";
import PRODUCT_DI_TYPES from "../utils/dependencies/product_di_types.js";
import ProductController from "../controllers/product_controller.js";

@injectable()
export default class ProductRoute {
  private static readonly _prefix = "/product";
  public readonly router: Router = express.Router();

  constructor(
    @inject(PRODUCT_DI_TYPES.ProductController)
    private readonly _productController: ProductController
  ) {
    this.fetchAllProducts();
  }

  private fetchAllProducts() {
    this.router.get(ProductRoute._prefix, this._productController.fetchAll);
  }
}
