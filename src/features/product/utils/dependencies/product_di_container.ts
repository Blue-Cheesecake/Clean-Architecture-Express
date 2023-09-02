import { Container } from "inversify";
import IFeatureDIContainer from "../../../../utils/dependencies/ifeature_di_container.js";
import ProductController from "../../controllers/product_controller.js";
import PRODUCT_DI_TYPES from "./product_di_types.js";
import ProductRoute from "../../routes/product_route.js";

export default class ProductDIContainer implements IFeatureDIContainer {
  constructor(private _container: Container) {}

  bind(): void {
    this._container
      .bind<ProductRoute>(PRODUCT_DI_TYPES.ProductRoute)
      .to(ProductRoute)
      .inSingletonScope();

    this._container
      .bind<ProductController>(PRODUCT_DI_TYPES.ProductController)
      .to(ProductController)
      .inSingletonScope();
  }
}
