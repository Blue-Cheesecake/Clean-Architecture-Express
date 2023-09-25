import { inject, injectable } from "inversify";
import IProductRepository from "./iproductRepository.js";
import COMMON_DI_TYPES from "../../../utils/dependencies/commonDITypes.js";
import MySQLDataSource from "../../../utils/datasources/mysqlDatasource.js";
import IProductEntity from "../entities/iproductEntity.js";

@injectable()
export default class MySQLProductRepository implements IProductRepository {
  constructor(
    @inject(COMMON_DI_TYPES.IDataSource)
    private readonly _mysqlDataSource: MySQLDataSource
  ) {}

  add(product: IProductEntity): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._mysqlDataSource.connection.query("ADD PRODUCT QUERY", (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  findAll(): Promise<IProductEntity[]> {
    return new Promise((resolve, reject) => {
      this._mysqlDataSource.connection.query("SELECT * FROM Products", (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  }
}
