import { injectable } from "inversify";
import ProductModel from "../models/ProductModel.js";
import IProductRepository from "./IProductRepository.js";
import IProductEntity from "../entities/IProductEntity.js";
import ProductMongooseModel from "../models/ProductMongooseModel.js";

@injectable()
export default class ProductRepository implements IProductRepository {
  async add(product: ProductModel): Promise<void> {
    const productModel = new ProductMongooseModel(product.toObject());
    await productModel.save();
  }

  async findAll(): Promise<IProductEntity[]> {
    const response = ProductMongooseModel.find();
    return response;
  }
}
