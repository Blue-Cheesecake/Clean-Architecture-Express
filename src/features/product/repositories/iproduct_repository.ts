import IProductEntity from "../entities/iproduct_entity.js";
export default interface IProductRepository {
  add(product: IProductEntity): Promise<void>;
  findAll(): Promise<Array<IProductEntity>>;
}
