import IProductEntity from "../entities/iproductEntity.js";
export default interface IProductRepository {
  add(product: IProductEntity): Promise<void>;
  findAll(): Promise<Array<IProductEntity>>;
}
