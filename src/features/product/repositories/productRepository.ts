import { injectable } from "inversify";
import IProductEntity from "../entities/iproductEntity.js";
import ProductMongooseModel from "../models/productMongooseModel.js";
import IProductRepository from "./iproductRepository.js";
import ProductModel from "../models/productModel.js";

@injectable()
export default class ProductRepository implements IProductRepository {
  async add(product: ProductModel): Promise<void> {
    const productModel = new ProductMongooseModel(product.toJSONObject());
    await productModel.save();
  }

  async findAll(): Promise<IProductEntity[]> {
    const response = ProductMongooseModel.find();
    return response;
  }
}
