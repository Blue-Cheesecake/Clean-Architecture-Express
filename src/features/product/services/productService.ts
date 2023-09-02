import { inject, injectable } from "inversify";
import PRODUCT_DI_TYPES from "../utils/dependencies/productDITypes.js";
import ProductRepository from "../repositories/productRepository.js";
import IProductEntity from "../entities/iproductEntity.js";
import ProductModel from "../models/productModel.js";

@injectable()
export default class ProductService {
  constructor(
    @inject(PRODUCT_DI_TYPES.ProductRepository)
    private readonly _productRepository: ProductRepository
  ) {}

  public async addProduct(product: ProductModel): Promise<void> {
    await this._productRepository.add(product);
  }

  public async getAllProducts(): Promise<Array<IProductEntity>> {
    const response = await this._productRepository.findAll();
    return response;
  }
}
