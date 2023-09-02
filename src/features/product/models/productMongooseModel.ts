import { Schema, model } from "mongoose";
import IProductEntity from "../entities/iproductEntity.js";

const schema = new Schema<IProductEntity>({
  name: { type: String, required: true },
  version: { type: Number, required: true },
  type: { type: Number, required: true },
});

const ProductMongooseModel = model<IProductEntity>("Product", schema);

export default ProductMongooseModel;
