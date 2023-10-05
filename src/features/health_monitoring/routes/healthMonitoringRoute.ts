import { inject, injectable } from "inversify";
import BaseRoute from "../../../utils/baseRoute.abs.js";
import HealthMonitoringRoutePath from "../utils/constants/healthMonitoringRoutePath.js";
import HEALTH_MONITORING_DI_TYPES from "../utils/dependencies/healthMonitoringDITypes.js";
import HealthMonitoringController from "../controllers/healthMonitoringController.js";

@injectable()
export default class HealthMonitoringRoute extends BaseRoute {
  constructor(
    @inject(HEALTH_MONITORING_DI_TYPES.HealthMonitoringController)
    private readonly _healthMonitoringController: HealthMonitoringController
  ) {
    super();
  }

  protected configureRoutes(): void {
    this.router.get(HealthMonitoringRoutePath.watchHealth, this._healthMonitoringController.listenPatientHealth);
  }
}
