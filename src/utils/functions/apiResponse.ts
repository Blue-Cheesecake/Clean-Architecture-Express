import { Request, Response } from "express";

export default class APIResponse {
  private constructor() {}

  /// RESTFul
  /// __________________

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

  /// Server-Sent Event
  /// __________________

  public static async serverSentEvent(
    req: Request,
    res: Response,
    writtingCallback: () => void,
    onCloseCallback?: () => void
  ) {
    res.set({
      "Cache-Control": "no-cache",
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
    });
    res.flushHeaders();

    res.write("retry: 10000\n\n");

    let count = 0;

    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Emit", ++count);
      // Emit an SSE that contains the current 'count' as a string
      res.write(`data: ${count}\n\n`);
    }

    // writtingCallback();

    // req.on("close", () => {
    //   if (onCloseCallback !== undefined) onCloseCallback();
    //   res.end();
    // });
  }
}
