import UserModel from "../models/userModels";
import IUser from "../interfaces/userInterface";

export default class UserService {
  public userModel = new UserModel();

  public async getAll(): Promise<IUser[]> {
    const users = await this.userModel.getAll();
    return users;
  }
}