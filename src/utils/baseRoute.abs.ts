import express, { Router } from "express";
import { injectable } from "inversify";

@injectable()
export default abstract class BaseRoute {
  public readonly router: Router = express.Router();
  protected abstract configureRoutes(): void;
}
