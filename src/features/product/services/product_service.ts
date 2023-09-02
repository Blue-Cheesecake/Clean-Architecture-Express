import { inject, injectable } from "inversify";
import PRODUCT_DI_TYPES from "../utils/dependencies/product_di_types.js";
import ProductRepository from "../repositories/product_repository.js";
import IProductEntity from "../entities/iproduct_entity.js";

@injectable()
export default class ProductService {
  constructor(
    @inject(PRODUCT_DI_TYPES.ProductRepository)
    private readonly _productRepository: ProductRepository
  ) {}

  public async addProduct(product: IProductEntity): Promise<void> {
    await this._productRepository.add(product);
  }

  public async getAllProducts(): Promise<Array<IProductEntity>> {
    const response = await this._productRepository.findAll();
    return response;
  }
}
