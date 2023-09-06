import { Expose } from "class-transformer";
import BaseModel from "../../../utils/models/baseModel.js";

export default class AuthenticateResponseModel extends BaseModel {
  constructor(token: string) {
    super();
    this.token = token;
  }

  @Expose({ name: "token" })
  private _token: string;

  public get token(): string {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }
}
