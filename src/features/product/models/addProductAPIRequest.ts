import { Request } from "express";
import ProductModel from "./productModel.js";

export default interface AddProductAPIRequest extends Request {
  body: ProductModel;
}
