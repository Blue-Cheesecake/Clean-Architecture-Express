import Transformations from "../functions/transformations.js";

export default class BaseModel {
  toObject() {
    return Transformations.modelToObject(this);
  }
}
