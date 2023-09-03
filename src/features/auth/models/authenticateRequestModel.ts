import { Expose } from "class-transformer";
import { IsDefined, IsString } from "class-validator";

export default class AuthenticateRequestModel {
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
