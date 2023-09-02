import { injectable } from "inversify";
import IProductEntity from "../entities/iproduct_entity.js";
import ProductModel from "../models/product_model.js";
import IProductRepository from "./iproduct_repository.js";

@injectable()
export default class ProductRepository implements IProductRepository {
  async findAll(): Promise<IProductEntity[]> {
    const response = await ProductModel.find();
    return response;
  }
}
