import { inject, injectable } from "inversify";
import COMMON_DI_TYPES from "../dependencies/commonDITypes.js";
import AppPropertiesModel from "../models/appPropertiesModel.js";
import IDataSource from "./idatasource.js";
import { Connection, createConnection } from "mysql";

@injectable()
export default class MySQLDataSource implements IDataSource {
  constructor(
    @inject(COMMON_DI_TYPES.AppPropertiesModel)
    private readonly _appProperties: AppPropertiesModel
  ) {}

  private _connection: Connection;

  public get connection(): Connection {
    return this._connection;
  }

  async openConnection(): Promise<void> {
    this._connection = createConnection({
      host: this._appProperties.mysqlHostName,
      user: this._appProperties.mysqlUsername,
      password: this._appProperties.mysqlPassword,
    });

    this._connection.connect((err) => {
      if (err) throw err;
    });
  }
  async closeConnection(): Promise<void> {
    this._connection.end();
  }
}
