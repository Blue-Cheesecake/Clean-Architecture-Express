import { injectable } from "inversify";
import PatientHealthModel from "../models/patientHealthModel.js";

@injectable()
export default class HealthMonitoringService {
  constructor() {}

  public async listenPatientHealth(onchangeCallback: (newHealthRecord: PatientHealthModel) => void): Promise<void> {
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("resolved");

      const mockData = new PatientHealthModel(Math.floor(Math.random() * 101));
      onchangeCallback(mockData);
    }
  }
}
