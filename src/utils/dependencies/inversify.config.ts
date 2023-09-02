import "reflect-metadata";
import { Container } from "inversify";
import AppPropertiesModel from "../models/appPropertiesModel.js";
import COMMON_DI_TYPES from "./commonDITypes.js";
import ILogger from "../log/ilogger.js";
import CACELogger from "../log/caceLogger.js";
import IDataSource from "../datasources/idatasource.js";
import MongooseDataSource from "../datasources/mongooseDatasource.js";
import AppConfig from "../../config/appConfig.js";
import ProductDIContainer from "../../features/product/utils/dependencies/productDIContainer.js";

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
    this.bindFeatures();
  }

  private bindAppConfig() {
    this._container
      .bind<AppConfig>(COMMON_DI_TYPES.AppConfig)
      .to(AppConfig)
      .inSingletonScope();
  }

  private bindLogger() {
    this._container
      .bind<ILogger>(COMMON_DI_TYPES.ILogger)
      .to(CACELogger)
      .inSingletonScope();
  }

  private bindDataSource() {
    this._container
      .bind<IDataSource>(COMMON_DI_TYPES.IDataSource)
      .to(MongooseDataSource)
      .inSingletonScope();
  }

  private bindAppProperties() {
    this._container
      .bind<AppPropertiesModel>(COMMON_DI_TYPES.AppPropertiesModel)
      .to(AppPropertiesModel)
      .inSingletonScope();
  }

  private bindFeatures() {
    const product = new ProductDIContainer(this._container);
    product.bind();
  }
}

const container = new DIContainer().container;

export { container };
