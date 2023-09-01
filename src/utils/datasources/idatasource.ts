export default interface IDataSource {
  openConnection(): Promise<void>;
  closeConnection(): Promise<void>;
}
