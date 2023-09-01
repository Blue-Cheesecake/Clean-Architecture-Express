import express from "express";
import IDataSource from "../utils/datasources/idatasource.js";
import bodyParser from "body-parser";

export default class AppConfig {
  public express = express();

  constructor(private _dataSource: IDataSource) {
    this.express = express();
    this.setUp();
  }

  private async setUp(): Promise<void> {
    this.configureDatabase();
    this.configureMiddlewares();
    this.configureRoutes();
  }

  private async configureDatabase(): Promise<void> {
    await this._dataSource.openConnection();
  }

  private configureMiddlewares(): void {
    this.express.use(bodyParser.json());
  }

  private configureRoutes(): void {}
}
