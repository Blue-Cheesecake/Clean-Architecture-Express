import { injectable } from "inversify";

@injectable()
export default class AppPropertiesModel {
  constructor() {}

  public get port(): number {
    return process.env.port == undefined
      ? 8080
      : Number.parseInt(process.env.port);
  }

  public get mongodbUrl(): string {
    return process.env.mongoURL == undefined ? "" : process.env.mongoURL;
  }
}
