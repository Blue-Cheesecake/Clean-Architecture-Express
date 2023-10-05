import { Expose } from "class-transformer";
import { IsDefined, IsInt } from "class-validator";

export default class PatientHealthRequestModel {
  @Expose({ name: "id " })
  private _id: number;

  public get id(): number {
    return this._id;
  }

  @IsInt()
  @IsDefined()
  public set id(value: number) {
    this._id = value;
  }
}
