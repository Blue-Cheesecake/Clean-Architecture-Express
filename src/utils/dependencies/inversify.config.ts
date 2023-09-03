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
import IUserRepository from "../repositories/iuserRepository.js";
import MockUserRepository from "../repositories/mockUserRepository.js";
import UserRepository from "../repositories/userRepository.js";
import AuthDIContainer from "../../features/auth/utils/dependencies/authDIContainer.js";

class DIContainer {
  private _container: Container;
  private _appProperties: AppPropertiesModel;

  public get container(): Container {
    return this._container;
  }

  constructor() {
    this._container = new Container();
    this.setUp();
  }

  private setUp() {
    this.bindAppConfig();
    this.bindAppProperties();
    this.bindDataSource();
    this.bindLogger();
    this.bindRepository();
    this.bindFeatures();
  }

  private bindAppConfig() {
    this._container.bind<AppConfig>(COMMON_DI_TYPES.AppConfig).to(AppConfig).inSingletonScope();
  }

  private bindLogger() {
    this._container.bind<ILogger>(COMMON_DI_TYPES.ILogger).to(CACELogger).inSingletonScope();
  }

  private bindDataSource() {
    this._container.bind<IDataSource>(COMMON_DI_TYPES.IDataSource).to(MongooseDataSource).inSingletonScope();
  }

  private bindAppProperties() {
    this._container
      .bind<AppPropertiesModel>(COMMON_DI_TYPES.AppPropertiesModel)
      .to(AppPropertiesModel)
      .inSingletonScope();

    this._appProperties = this._container.get(COMMON_DI_TYPES.AppPropertiesModel);
  }

  private bindRepository() {
    if (this._appProperties.isMocking) {
      this._container.bind<IUserRepository>(COMMON_DI_TYPES.IUserRepository).to(MockUserRepository).inSingletonScope();
    } else {
      this._container.bind<IUserRepository>(COMMON_DI_TYPES.IUserRepository).to(UserRepository).inSingletonScope();
    }
  }

  private bindFeatures() {
    // FIXME: we could utlize pub/sub pattern
    const product = new ProductDIContainer(this._container);
    product.bind();

    const auth = new AuthDIContainer(this._container);
    auth.bind();
  }
}

export { DIContainer };
