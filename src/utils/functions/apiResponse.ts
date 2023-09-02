import { Response } from "express";

export default class APIResponse {
  private constructor() {}

  /// 200-299

  public static ok<T>(res: Response, body: T | null): void {
    res.status(200).send(body);
  }

  // 400-499
  public static badRequest<T>(res: Response, body: T | null) {
    res.status(400).send(body);
  }

  public static unAuthorized<T>(res: Response, body: T | null) {
    res.status(401).send(body);
  }
}
