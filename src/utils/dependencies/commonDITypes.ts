const COMMON_DI_TYPES = {
  AppConfig: Symbol.for("AppConfig"),
  AppPropertiesModel: Symbol.for("AppPropertiesModel"),
  ILogger: Symbol.for("ILogger"),
  IDataSource: Symbol.for("IDataSource"),
  IUserRepository: Symbol.for("IUserRepository"),
};

export default COMMON_DI_TYPES;
