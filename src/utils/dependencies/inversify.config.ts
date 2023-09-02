import "reflect-metadata";
import { Container } from "inversify";
import AppPropertiesModel from "../models/app_properties_model.js";
import TYPES from "./types.js";
import ILogger from "../log/ilogger.js";
import CACELogger from "../log/cace_logger.js";
import IDataSource from "../datasources/idatasource.js";
import MongooseDataSource from "../datasources/mongoose_datasource.js";
import AppConfig from "../../config/app_config.js";

class DIContainer {
  private _container: Container;

  public get container(): Container {
    return this._container;
  }

  constructor() {
    this._container = new Container();
    this.setUp();
  }

  private setUp() {
    this.bindAppConfig();
    this.bindDataSource();
    this.bindLogger();
    this.bindAppProperties();
  }

  private bindAppConfig() {
    this._container
      .bind<AppConfig>(TYPES.AppConfig)
      .to(AppConfig)
      .inSingletonScope();
  }

  private bindLogger() {
    this._container
      .bind<ILogger>(TYPES.ILogger)
      .to(CACELogger)
      .inSingletonScope();
  }

  private bindDataSource() {
    this._container
      .bind<IDataSource>(TYPES.IDataSource)
      .to(MongooseDataSource)
      .inSingletonScope();
  }

  private bindAppProperties() {
    this._container
      .bind<AppPropertiesModel>(TYPES.AppPropertiesModel)
      .to(AppPropertiesModel)
      .inSingletonScope();
  }

  private bindMiddlewares() {}
  private bindControllers() {}
  private bindServices() {}
  private bindRepositories() {}
}

const container = new DIContainer().container;

export { container };
