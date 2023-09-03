import { injectable } from "inversify";
import IUserRepository from "./iuserRepository.js";
import IUserEntity from "../entities/iuserEntity.js";

@injectable()
export default class UserRepository implements IUserRepository {
  findById(id: string): Promise<IUserEntity | null | undefined> {
    throw new Error("Method not implemented.");
  }
  findByUsername(username: string): Promise<IUserEntity | null | undefined> {
    throw new Error("Method not implemented.");
  }
}
