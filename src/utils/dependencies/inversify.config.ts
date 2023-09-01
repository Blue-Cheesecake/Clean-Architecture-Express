import "reflect-metadata";
import { Container } from "inversify";
import AppPropertiesModel from "../models/app_properties_model.js";
import TYPES from "./types.js";
import ILogger from "../log/ilogger.js";
import CACELogger from "../log/cace_logger.js";
import IDataSource from "../datasources/idatasource.js";
import MongooseDataSource from "../datasources/mongoose_datasource.js";

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
    this.bindDataSource();
    this.bindLogger();
    this.bindAppProperties();
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
}

const container = new DIContainer().container;

export { container };
