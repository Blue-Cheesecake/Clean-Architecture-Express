import IProductEntity from "../entities/iproduct_entity.js";
export default interface IProductRepository {
  findAll(): Promise<Array<IProductEntity>>;
}
