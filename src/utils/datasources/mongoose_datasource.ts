import { inject, injectable } from "inversify";
import IDataSource from "./idatasource.js";
import AppPropertiesModel from "../models/app_properties_model.js";
import TYPES from "../dependencies/types.js";
import mongoose from "mongoose";

@injectable()
export default class MongooseDataSource implements IDataSource {
  @inject(TYPES.AppPropertiesModel) private _appProperties: AppPropertiesModel;

  async openConnection(): Promise<void> {
    await mongoose.connect(this._appProperties.mongodbUrl, {
      autoIndex: false,
      dbName: this._appProperties.mongodbDatabase,
    });
  }
  async closeConnection(): Promise<void> {
    await mongoose.connection.close();
  }
}
