import { IsDefined, IsEnum, IsNumber, IsString } from "class-validator";
import IProductEntity from "../entities/iproductEntity.js";
import ProductType from "../utils/constants/productType.js";
import { Expose } from "class-transformer";
import BaseModel from "../../../utils/models/baseModel.js";

export default class ProductModel extends BaseModel implements IProductEntity {
  @Expose({ name: "name" })
  private _name: string;
  public get name(): string {
    return this._name;
  }

  @IsString()
  @IsDefined()
  public set name(value: string) {
    this._name = value;
  }

  @Expose({ name: "version" })
  private _version: number;
  public get version(): number {
    return this._version;
  }

  @IsNumber()
  @IsDefined()
  public set version(value: number) {
    this._version = value;
  }

  @Expose({ name: "type" })
  private _type: ProductType;
  public get type(): ProductType {
    return this._type;
  }

  @IsDefined()
  @IsEnum(ProductType)
  public set type(value: ProductType) {
    this._type = value;
  }
}
