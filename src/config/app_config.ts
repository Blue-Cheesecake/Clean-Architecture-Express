import express from "express";
import IDataSource from "../utils/datasources/idatasource.js";
import bodyParser from "body-parser";
import ILogger from "../utils/log/ilogger.js";
import { inject, injectable } from "inversify";
import TYPES from "../utils/dependencies/types.js";

@injectable()
export default class AppConfig {
  public express = express();

  constructor(
    @inject(TYPES.IDataSource) private _dataSource: IDataSource,
    @inject(TYPES.ILogger) private _logger: ILogger
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

  private configureRoutes(): void {}
}
