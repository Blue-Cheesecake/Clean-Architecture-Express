import { injectable } from "inversify";
import PatientHealthModel from "../models/patientHealthModel";

@injectable()
export default class HealthMonitoringService {
  public listenPatientHealth(onchangeCallback: (newHealthRecord: PatientHealthModel) => void): void {
    while (true) {
      setInterval(() => {
        const mockData = new PatientHealthModel(Math.floor(Math.random() * 101));
        onchangeCallback(mockData);
      }, 5000);
    }
  }
}
