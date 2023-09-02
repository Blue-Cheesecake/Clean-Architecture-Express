import dotenv from "dotenv";
import AppConfig from "./config/app_config.js";
import { container } from "./utils/dependencies/inversify.config.js";
import IDataSource from "./utils/datasources/idatasource.js";
import TYPES from "./utils/dependencies/types.js";
import ILogger from "./utils/log/ilogger.js";

// https://pvictorsys.medium.com/dependency-injection-in-typescript-with-inversify-e956fa28b668

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

class ServerApp {
  public static async run(): Promise<void> {
    const app = container.get<AppConfig>(TYPES.AppConfig).express;

    app.listen(process.env.port, () => {
      console.log(`Server is running on port ${process.env.port}`);
    });
  }
}

ServerApp.run();
