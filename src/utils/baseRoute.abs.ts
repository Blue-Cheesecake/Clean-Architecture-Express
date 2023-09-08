import express, { Router } from "express";

export default abstract class BaseRoute {
  public readonly router: Router = express.Router();
  protected abstract configureRoutes(): void;
}
