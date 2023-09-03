import IUserEntity from "../entities/iuserEntity.js";

export default interface IUserRepository {
  findById(id: string): Promise<IUserEntity | null | undefined>;
  findByUsername(username: string): Promise<IUserEntity | null | undefined>;
}
