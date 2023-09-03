import { Request } from "express";
import ProductModel from "./ProductModel.js";

export default interface AddProductAPIRequest extends Request {
  body: ProductModel;
}
