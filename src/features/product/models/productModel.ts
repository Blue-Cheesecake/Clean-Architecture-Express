import { IsNumber, IsString } from "class-validator";
import IProductEntity from "../entities/iproductEntity.js";
import ProductType from "../utils/constants/productType.js";

export default class ProductModel implements IProductEntity {
  private _name: string;
  public get name(): string {
    return this._name;
  }

  @IsString()
  public set name(value: string) {
    this._name = value;
  }

  private _version: number;
  public get version(): number {
    return this._version;
  }

  @IsNumber()
  public set version(value: number) {
    this._version = value;
  }

  private _type: ProductType;
  public get type(): ProductType {
    return this._type;
  }
  public set type(value: ProductType) {
    this._type = value;
  }
}
