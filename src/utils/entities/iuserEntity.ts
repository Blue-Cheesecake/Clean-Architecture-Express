import { Schema } from "mongoose";

export default interface IUserEntity {
  id: Schema.Types.ObjectId;
  username: string;
  password: string;
}
