import IProductEntity from "../entities/IProductEntity.js";
export default interface IProductRepository {
  add(product: IProductEntity): Promise<void>;
  findAll(): Promise<Array<IProductEntity>>;
}
