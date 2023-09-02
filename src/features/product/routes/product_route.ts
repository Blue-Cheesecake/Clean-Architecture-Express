import express, { Router } from "express";
import { inject, injectable } from "inversify";
import PRODUCT_DI_TYPES from "../utils/dependencies/product_di_types.js";
import ProductController from "../controllers/product_controller.js";

@injectable()
export default class ProductRoute {
  private static readonly _prefix = "/product";
  private readonly _router: Router;

  public get router(): Router {
    return this._router;
  }

  constructor(
    @inject(PRODUCT_DI_TYPES.ProductController)
    private _controller: ProductController
  ) {
    this._router = express.Router();
    this.fetchAllProducts();
  }

  private fetchAllProducts() {
    this._router.get(ProductRoute._prefix, this._controller.fetchAll);
  }
}
