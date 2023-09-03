import { Schema, model } from "mongoose";
import IProductEntity from "../entities/iproductEntity.js";

const schema = new Schema<IProductEntity>({
  name: { type: String, required: true },
  version: { type: Number, required: true },
  type: { type: String, required: true },
});

const collectionName = "products";

const ProductMongooseModel = model<IProductEntity>("Product", schema, collectionName);

export default ProductMongooseModel;
