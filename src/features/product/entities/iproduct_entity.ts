import ProductType from "../utils/constants/product_type.js";

export default interface IProductEntity {
  name: string;
  version: number;
  type: ProductType;
}
