import { Expose } from "class-transformer";
import BaseModel from "../../../utils/models/baseModel.js";

export default class PatientHealthResponseModel extends BaseModel {
  constructor(healthPoint: number) {
    super();
    this.healthPoint = healthPoint;
  }

  @Expose({ name: "healthPoint" })
  private _healthPoint: number;
  public get healthPoint(): number {
    return this._healthPoint;
  }
  public set healthPoint(value: number) {
    this._healthPoint = value;
  }
}
