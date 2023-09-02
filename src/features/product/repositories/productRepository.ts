import { injectable } from "inversify";
import IProductEntity from "../entities/iproductEntity.js";
import ProductMongooseModel from "../models/productMongooseModel.js";
import IProductRepository from "./iproductRepository.js";

@injectable()
export default class ProductRepository implements IProductRepository {
  async add(product: IProductEntity): Promise<void> {
    const productModel = new ProductMongooseModel(product);
    await productModel.save();
  }

  async findAll(): Promise<IProductEntity[]> {
    const response = ProductMongooseModel.find();
    return response;
  }
}
