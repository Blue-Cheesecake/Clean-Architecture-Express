import { Request } from "express";
import AuthenticateRequestModel from "./authenticateRequestModel.js";

export default interface AuthenticateRequestAPIModel extends Request {
  body: AuthenticateRequestModel;
}
