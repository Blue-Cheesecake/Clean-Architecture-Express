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

  listenPatientHealth = async (req: Request, res: Response): Promise<void> => {
    console.log("connected");
    APIResponse.serverSentEvent(req, res, () => {
      this._healthMonitoringService.listenPatientHealth((newHealthRecord: PatientHealthModel) => {
        console.log(`writting data: ${JSON.stringify(newHealthRecord)}`);

        res.write(`data: ${JSON.stringify(newHealthRecord)}`);
      });
    });
  };
}
