import { Schema } from "mongoose";
import ProductType from "../utils/constants/ProductType.js";

export default interface IProductEntity {
  id: Schema.Types.ObjectId;
  name: string;
  version: number;
  type: ProductType;
}
