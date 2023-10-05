import express from "express";
import IDataSource from "../utils/datasources/idatasource.js";
import bodyParser from "body-parser";
import ILogger from "../utils/log/ilogger.js";
import { inject, injectable } from "inversify";
import COMMON_DI_TYPES from "../utils/dependencies/commonDITypes.js";
import ProductRoute from "../features/product/routes/productRoute.js";
import PRODUCT_DI_TYPES from "../features/product/utils/dependencies/productDITypes.js";
import morgan from "morgan";
import morganBody from "morgan-body";
import AUTH_DI_TYPES from "../features/auth/utils/dependencies/authDITypes.js";
import AuthRoute from "../features/auth/routes/authRoute.js";
import cors from "cors";

@injectable()
export default class AppConfig {
  private static readonly _prefix = "/api/v1";
  public readonly express = express();

  constructor(
    @inject(COMMON_DI_TYPES.IDataSource)
    private readonly _dataSource: IDataSource,
    @inject(COMMON_DI_TYPES.ILogger)
    private readonly _logger: ILogger,
    @inject(PRODUCT_DI_TYPES.ProductRoute)
    private readonly _productRoute: ProductRoute,
    @inject(AUTH_DI_TYPES.AuthRoute)
    private readonly _authRoute: AuthRoute
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
      this._logger.printDebug("Successfully connect to database");
    } catch (error) {
      this._logger.printDebug("Error on connecting to database");
      await this._dataSource.closeConnection();
      return process.exit(1);
    }
  }

  private configureMiddlewares(): void {
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(morgan(`combined`));
    // morganBody(this.express);
  }

  private configureRoutes(): void {
    this.express.use(AppConfig._prefix, this._productRoute.router);
    this.express.use(AppConfig._prefix, this._authRoute.router);
  }
}
