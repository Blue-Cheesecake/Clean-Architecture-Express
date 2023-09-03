import { Container } from "inversify";
import IFeatureDIContainer from "../../../../utils/dependencies/IFeatureDIContainer.js";
import ProductController from "../../controllers/ProductController.js";
import PRODUCT_DI_TYPES from "./ProductDITypes.js";
import ProductRoute from "../../routes/ProductRoute.js";
import ProductService from "../../services/ProductService.js";
import ProductRepository from "../../repositories/ProductRepository.js";

export default class ProductDIContainer implements IFeatureDIContainer {
  constructor(private _container: Container) {}

  bind(): void {
    this._container
      .bind<ProductRepository>(PRODUCT_DI_TYPES.ProductRepository)
      .to(ProductRepository)
      .inSingletonScope();

    this._container.bind<ProductService>(PRODUCT_DI_TYPES.ProductService).to(ProductService).inSingletonScope();

    this._container
      .bind<ProductController>(PRODUCT_DI_TYPES.ProductController)
      .to(ProductController)
      .inSingletonScope();

    this._container.bind<ProductRoute>(PRODUCT_DI_TYPES.ProductRoute).to(ProductRoute).inSingletonScope();
  }
}
