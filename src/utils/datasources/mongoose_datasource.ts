import { inject, injectable } from "inversify";
import IDataSource from "./idatasource.js";
import AppPropertiesModel from "../models/app_properties_model.js";
import TYPES from "../dependencies/types.js";
import mongoose from "mongoose";
import ILogger from "../log/ilogger.js";

@injectable()
export default class MongooseDataSource implements IDataSource {
  @inject(TYPES.AppPropertiesModel) private _appProperties: AppPropertiesModel;
  @inject(TYPES.ILogger) private _logger: ILogger;

  async openConnection(): Promise<void> {
    try {
      await mongoose.connect(this._appProperties.mongodbUrl, {
        autoIndex: false,
        dbName: this._appProperties.mongodbDatabase,
      });
      this._logger.printDebug("Successfully connect to mongodb");
    } catch (error) {
      this._logger.printDebug("Error on connecting to mongodb");
    }
  }
  async closeConnection(): Promise<void> {
    await mongoose.connection.close();
  }
}
