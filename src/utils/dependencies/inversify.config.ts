import { Container } from "inversify";
import AppPropertiesModel from "../models/app_properties_model";
import TYPES from "./types";

const container = new Container();

container
  .bind<AppPropertiesModel>(TYPES.AppPropertiesModel)
  .to(AppPropertiesModel)
  .inSingletonScope();

export default container;
