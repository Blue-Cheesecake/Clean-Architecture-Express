import express from "express";
import IDataSource from "../utils/datasources/idatasource.js";
import bodyParser from "body-parser";
import ILogger from "../utils/log/ilogger.js";
import { inject, injectable } from "inversify";
import COMMON_DI_TYPES from "../utils/dependencies/common_di_types.js";
import ProductRoute from "../features/product/routes/product_route.js";
import PRODUCT_DI_TYPES from "../features/product/utils/dependencies/product_di_types.js";

@injectable()
export default class AppConfig {
  private static readonly _prefix = "/api/v1";
  public readonly express = express();

  constructor(
    @inject(COMMON_DI_TYPES.IDataSource)
    private readonly _dataSource: IDataSource,
    @inject(COMMON_DI_TYPES.ILogger) private readonly _logger: ILogger,
    @inject(PRODUCT_DI_TYPES.ProductRoute)
    private readonly _productRoute: ProductRoute
  ) {
    this.express = express();
    this.setUp();
  }

  private async setUp(): Promise<void> {
    this.configureDatabase();
    this.configureMiddlewares();
    this.configureRoutes();
  }

  private async configureDatabase(): Promise<void> {
    try {
      await this._dataSource.openConnection();
      this._logger.printDebug("Successfully connect to mongodb");
    } catch (error) {
      this._logger.printDebug("Error on connecting to mongodb");
      await this._dataSource.closeConnection();
    }
  }

  private configureMiddlewares(): void {
    this.express.use(bodyParser.json());
  }

  private configureRoutes(): void {
    this.express.use(AppConfig._prefix, this._productRoute.router);
  }
}
