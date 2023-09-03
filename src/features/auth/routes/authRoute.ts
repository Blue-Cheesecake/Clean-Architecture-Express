import { inject, injectable } from "inversify";
import AUTH_DI_TYPES from "../utils/dependencies/authDITypes.js";
import AuthController from "../controllers/authController.js";
import express, { Router } from "express";
import Transformations from "../../../utils/functions/transformations.js";
import AuthenticateRequestModel from "../models/authenticateRequestModel.js";

@injectable()
export default class AuthRoute {
  private static readonly _prefix = "/auth";
  public readonly router: Router = express.Router();

  constructor(@inject(AUTH_DI_TYPES.AuthController) private readonly _authController: AuthController) {
    this.configureRoutes();
  }

  private configureRoutes() {
    this.router.post(
      AuthRoute._prefix,
      Transformations.convertRequestToDataClassMiddleware(AuthenticateRequestModel),
      this._authController.authenticate
    );
  }
}
