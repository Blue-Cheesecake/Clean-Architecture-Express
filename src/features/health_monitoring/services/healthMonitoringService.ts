import { injectable } from "inversify";
import PatientHealthModel from "../models/patientHealthModel.js";

@injectable()
export default class HealthMonitoringService {
  constructor() {
    console.log("service");
  }

  public async listenPatientHealth(onchangeCallback: (newHealthRecord: PatientHealthModel) => void): Promise<void> {
    setInterval(() => {
      const mockData = new PatientHealthModel(Math.floor(Math.random() * 101));
      onchangeCallback(mockData);
    }, 5000);
  }
}
