import { injectable } from "inversify";
import IProductEntity from "../entities/iproductEntity.js";
import ProductModel from "../models/productModel.js";
import IProductRepository from "./iproductRepository.js";

@injectable()
export default class ProductRepository implements IProductRepository {
  async add(product: IProductEntity): Promise<void> {
    const productModel = new ProductModel(product);
    await productModel.save();
  }

  async findAll(): Promise<IProductEntity[]> {
    const response = await ProductModel.find();
    return response;
  }
}
