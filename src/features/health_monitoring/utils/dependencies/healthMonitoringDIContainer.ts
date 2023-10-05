import { Container } from "inversify";
import IFeatureDIContainer from "../../../../utils/dependencies/ifeatureDIContainer.js";
import HealthMonitoringService from "../../services/healthMonitoringService.js";
import HEALTH_MONITORING_DI_TYPES from "./healthMonitoringDITypes.js";
import HealthMonitoringController from "../../controllers/healthMonitoringController.js";
import HealthMonitoringRoute from "../../routes/healthMonitoringRoute.js";

export default class HealthMonitoringDIContainer implements IFeatureDIContainer {
  constructor(private _container: Container) {}

  bind(): void {
    this._container
      .bind<HealthMonitoringService>(HEALTH_MONITORING_DI_TYPES.HealthMonitoringService)
      .to(HealthMonitoringService)
      .inSingletonScope();

    this._container
      .bind<HealthMonitoringController>(HEALTH_MONITORING_DI_TYPES.HealthMonitoringController)
      .to(HealthMonitoringController)
      .inSingletonScope();

    this._container
      .bind<HealthMonitoringRoute>(HEALTH_MONITORING_DI_TYPES.HealthMonitoringRoute)
      .to(HealthMonitoringRoute)
      .inSingletonScope();
  }
}
