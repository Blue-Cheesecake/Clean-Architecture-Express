import { Container } from "inversify";
import IFeatureDIContainer from "../../../../utils/dependencies/ifeature_di_container.js";
import ProductController from "../../controllers/product_controller.js";
import PRODUCT_DI_TYPES from "./product_di_types.js";
import ProductRoute from "../../routes/product_route.js";
import ProductService from "../../services/product_service.js";
import ProductRepository from "../../repositories/product_repository.js";

export default class ProductDIContainer implements IFeatureDIContainer {
  constructor(private _container: Container) {}

  bind(): void {
    this._container
      .bind<ProductRepository>(PRODUCT_DI_TYPES.ProductRepository)
      .to(ProductRepository)
      .inSingletonScope();

    this._container
      .bind<ProductService>(PRODUCT_DI_TYPES.ProductService)
      .to(ProductService)
      .inSingletonScope();

    this._container
      .bind<ProductController>(PRODUCT_DI_TYPES.ProductController)
      .to(ProductController)
      .inSingletonScope();

    this._container
      .bind<ProductRoute>(PRODUCT_DI_TYPES.ProductRoute)
      .to(ProductRoute)
      .inSingletonScope();
  }
}
