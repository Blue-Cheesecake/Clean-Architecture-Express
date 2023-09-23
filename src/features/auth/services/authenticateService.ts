import { inject, injectable } from "inversify";
import COMMON_DI_TYPES from "../../../utils/dependencies/commonDITypes.js";
import IUserEntity from "../../../utils/entities/iuserEntity.js";
import IUserRepository from "../../../utils/repositories/iuserRepository.js";

@injectable()
export default class AuthenticateService {
  constructor(@inject(COMMON_DI_TYPES.IUserRepository) private readonly _userRepository: IUserRepository) {}

  async authenticate(username: string, password: string): Promise<string | null> {
    const response: IUserEntity | null | undefined = await this._userRepository.findByUsername(username);

    if (response?.username === username && response.password === password) {
      // TODO: generate token
      return "<token value>";
    }
    return null;
  }
}
