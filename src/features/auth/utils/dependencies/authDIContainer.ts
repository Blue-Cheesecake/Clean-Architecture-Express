import { Container } from "inversify";
import IFeatureDIContainer from "../../../../utils/dependencies/ifeatureDIContainer.js";
import AuthRoute from "../../routes/authRoute.js";
import AUTH_DI_TYPES from "./authDITypes.js";
import AuthController from "../../controllers/authController.js";
import AuthenticateService from "../../services/authenticateService.js";

export default class AuthDIContainer implements IFeatureDIContainer {
  constructor(private _container: Container) {}

  bind(): void {
    this._container
      .bind<AuthenticateService>(AUTH_DI_TYPES.AuthenticateService)
      .to(AuthenticateService)
      .inSingletonScope();

    this._container.bind<AuthController>(AUTH_DI_TYPES.AuthController).to(AuthController).inSingletonScope();

    this._container.bind<AuthRoute>(AUTH_DI_TYPES.AuthRoute).to(AuthRoute).inSingletonScope();
  }
}
