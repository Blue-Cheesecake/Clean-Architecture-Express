import Transformations from "../functions/Transformations.js";

export default class BaseModel {
  toObject() {
    return Transformations.modelToObject(this);
  }
}
