import { Schema } from "mongoose";
import IUserEntity from "../entities/iuserEntity";
import { Exclude, Expose } from "class-transformer";
import { IsDefined, IsString } from "class-validator";
import BaseModel from "./baseModel.js";

export default class UserModel extends BaseModel implements IUserEntity {
  private _id: Schema.Types.ObjectId;
  @Exclude()
  public get id(): Schema.Types.ObjectId {
    return this._id;
  }

  @Expose({ name: "username" })
  private _username: string;

  public get username(): string {
    return this._username;
  }

  @IsString()
  @IsDefined()
  public set username(value: string) {
    this._username = value;
  }

  @Expose({ name: "password" })
  private _password: string;
  public get password(): string {
    return this._password;
  }

  @IsString()
  @IsDefined()
  public set password(value: string) {
    this._password = value;
  }
}
