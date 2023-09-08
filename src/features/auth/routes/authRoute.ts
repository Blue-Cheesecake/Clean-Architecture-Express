import { inject, injectable } from "inversify";
import AUTH_DI_TYPES from "../utils/dependencies/authDITypes.js";
import AuthController from "../controllers/authController.js";
import Transformations from "../../../utils/functions/transformations.js";
import AuthenticateRequestModel from "../models/authenticateRequestModel.js";
import BaseRoute from "../../../utils/baseRoute.abs.js";
import AuthRoutePath from "../utils/constants/authRoutePath.js";

@injectable()
export default class AuthRoute extends BaseRoute {
  constructor(@inject(AUTH_DI_TYPES.AuthController) private readonly _authController: AuthController) {
    super();

    this.configureRoutes();
  }

  protected configureRoutes(): void {
    this.router.post(
      AuthRoutePath.prefix,
      Transformations.convertRequestToDataClassMiddleware(AuthenticateRequestModel),
      this._authController.authenticate
    );
  }
}
