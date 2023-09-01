import "reflect-metadata";
import { Container } from "inversify";
import AppPropertiesModel from "../models/app_properties_model.js";
import TYPES from "./types.js";
import ILogger from "../log/ilogger.js";
import CACELogger from "../log/cace_logger.js";
import IDataSource from "../datasources/idatasource.js";
import MongooseDataSource from "../datasources/mongoose_datasource.js";

const container = new Container();

container.bind<ILogger>(TYPES.ILogger).to(CACELogger).inSingletonScope();

container
  .bind<IDataSource>(TYPES.IDataSource)
  .to(MongooseDataSource)
  .inSingletonScope();

container
  .bind<AppPropertiesModel>(TYPES.AppPropertiesModel)
  .to(AppPropertiesModel)
  .inSingletonScope();

export { container };
