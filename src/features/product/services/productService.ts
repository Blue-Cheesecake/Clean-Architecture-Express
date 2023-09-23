import { inject, injectable } from "inversify";
import PRODUCT_DI_TYPES from "../utils/dependencies/productDITypes.js";
import ProductModel from "../models/productModel.js";
import Transformations from "../../../utils/functions/transformations.js";
import IProductEntity from "../entities/iproductEntity.js";
import IProductRepository from "../repositories/iproductRepository.js";

@injectable()
export default class ProductService {
  constructor(
    @inject(PRODUCT_DI_TYPES.IProductRepository)
    private readonly _productRepository: IProductRepository
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
