import { injectable } from "inversify";
import ILogger from "./ilogger.js";

@injectable()
export default class CACELogger implements ILogger {
  printDebug(messages: string): void {
    console.debug(`[🐬]: ${messages}`);
  }
}
