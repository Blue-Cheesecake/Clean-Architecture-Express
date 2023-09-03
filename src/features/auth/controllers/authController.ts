import { Response } from "express";
import { inject, injectable } from "inversify";
import AuthenticateService from "../services/authenticateService.js";
import AUTH_DI_TYPES from "../utils/dependencies/authDITypes.js";
import AuthenticateRequestAPIModel from "../models/authenticateRequestAPIModel.js";
import APIResponse from "../../../utils/functions/apiResponse.js";
import SimpleMessageModel from "../../../utils/models/simpleMessageModel.js";
import AuthMessages from "../utils/constants/auth_messages.js";
import AuthenticateResponseModel from "../models/authenticateResponseModel.js";

@injectable()
export default class AuthController {
  public constructor(@inject(AUTH_DI_TYPES.AuthenticateService) private readonly loginService: AuthenticateService) {}

  public authenticate = async (req: AuthenticateRequestAPIModel, res: Response): Promise<void> => {
    const token: string | null = await this.loginService.authenticate(req.body.username, req.body.password);

    if (token === null) {
      return APIResponse.badRequest<SimpleMessageModel>(
        res,
        new SimpleMessageModel(AuthMessages.invalidUsernameOrPassword)
      );
    }

    const response = new AuthenticateResponseModel(token);

    return APIResponse.ok(res, response.toObject());
  };
}
