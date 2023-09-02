import { Schema, model } from "mongoose";
import IProductEntity from "../entities/iproduct_entity.js";

const schema = new Schema<IProductEntity>({
  name: { type: String, required: true },
  version: { type: Number, required: true },
  type: { type: Number, required: true },
});

const ProductModel = model<IProductEntity>("Product", schema);

export default ProductModel;
