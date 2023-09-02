import { instanceToPlain } from "class-transformer";

export default class BaseModel {
  toJSONObject() {
    return instanceToPlain(this);
  }
}
