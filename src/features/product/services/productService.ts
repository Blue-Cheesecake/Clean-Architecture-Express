import { inject, injectable } from "inversify";
import PRODUCT_DI_TYPES from "../utils/dependencies/ProductDITypes.js";
import ProductRepository from "../repositories/ProductRepository.js";
import ProductModel from "../models/ProductModel.js";
import Transformations from "../../../utils/functions/Transformations.js";
import IProductEntity from "../entities/IProductEntity.js";

@injectable()
export default class ProductService {
  constructor(
    @inject(PRODUCT_DI_TYPES.ProductRepository)
    private readonly _productRepository: ProductRepository
  ) {}

  public async addProduct(product: ProductModel): Promise<void> {
    await this._productRepository.add(product);
  }

  public async getAllProducts(): Promise<Array<object>> {
    const response: Array<IProductEntity> = await this._productRepository.findAll();

    const objects = response.map((e) => Transformations.entityToObject(ProductModel, e));

    return objects;
  }
}
