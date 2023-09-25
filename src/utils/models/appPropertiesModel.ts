import { injectable } from "inversify";

@injectable()
export default class AppPropertiesModel {
  public get port(): number {
    return Number.parseInt(process.env.port ?? "8080");
  }

  public get mongodbUrl(): string {
    return process.env.mongodbURL ?? "";
  }

  public get mongodbDatabase(): string {
    return process.env.mongodbUsedDatabase ?? "";
  }

  public get isMocking(): boolean {
    return process.env.mock === "true";
  }

  public get mysqlHostName(): string {
    return process.env.mysqlHostName ?? "";
  }

  public get mysqlUsername(): string {
    return process.env.mysqlUsername ?? "";
  }

  public get mysqlPassword(): string {
    return process.env.mysqlPassword ?? "";
  }
}
