import { Schema } from "mongoose";
import IUserEntity from "../entities/iuserEntity.js";
import IUserRepository from "./iuserRepository.js";
import { injectable } from "inversify";

@injectable()
export default class MockUserRepository implements IUserRepository {
  async findById(id: string): Promise<IUserEntity | null | undefined> {
    return Promise.resolve({
      id: new Schema.Types.ObjectId(""),
      username: "testusername",
      password: "testpassword",
    });
  }
  async findByUsername(username: string): Promise<IUserEntity | null | undefined> {
    return Promise.resolve({
      id: new Schema.Types.ObjectId(""),
      username: `${username}`,
      password: "testpassword",
    });
  }
}
