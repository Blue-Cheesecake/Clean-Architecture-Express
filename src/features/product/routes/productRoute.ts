import { inject, injectable } from "inversify";
import PRODUCT_DI_TYPES from "../utils/dependencies/productDITypes.js";
import ProductController from "../controllers/productController.js";
import Transformations from "../../../utils/functions/transformations.js";
import ProductModel from "../models/productModel.js";
import BaseRoute from "../../../utils/baseRoute.abs.js";
import ProductRoutePath from "../utils/constants/productRoutePath.js";

@injectable()
export default class ProductRoute extends BaseRoute {
  constructor(
    @inject(PRODUCT_DI_TYPES.ProductController)
    private readonly _productController: ProductController
  ) {
    super();

    this.configureRoutes();
  }

  protected configureRoutes() {
    this.router.get(ProductRoutePath.prefix, this._productController.fetchAll);

    this.router.post(
      ProductRoutePath.prefix,
      Transformations.convertRequestToDataClassMiddleware<ProductModel>(ProductModel),
      this._productController.addProduct
    );
  }
}
