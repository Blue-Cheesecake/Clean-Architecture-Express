import ProductType from "../utils/constants/productType.js";

export default interface IProductEntity {
  name: string;
  version: number;
  type: ProductType;
}
