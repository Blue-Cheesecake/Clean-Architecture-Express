import { inject, injectable } from "inversify";
import HealthMonitoringService from "../services/healthMonitoringService.js";
import HEALTH_MONITORING_DI_TYPES from "../utils/dependencies/healthMonitoringDITypes.js";
import APIResponse from "../../../utils/functions/apiResponse.js";
import { Request, Response } from "express";
import PatientHealthModel from "../models/patientHealthModel.js";

@injectable()
export default class HealthMonitoringController {
  constructor(
    @inject(HEALTH_MONITORING_DI_TYPES.HealthMonitoringService)
    private readonly _healthMonitoringService: HealthMonitoringService
  ) {}

  public listenPatientHealth(req: Request, res: Response): void {
    this._healthMonitoringService.listenPatientHealth((newHealthRecord: PatientHealthModel) => {
      APIResponse.serverSentEvent(req, res, () => {
        res.write(`data: ${JSON.stringify(newHealthRecord)}`);
      });
    });
  }
}
