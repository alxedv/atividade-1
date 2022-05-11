import { Request, Response } from "express";
import UserService from "../services/usersServices";
import { StatusCodes } from "http-status-codes";

export default class UserController {
  public userService = new UserService();
  
  public async getAll(_req: Request, res: Response) {
    const users = await this.userService.getAll();
    console.log('users');
    
    res.status(StatusCodes.OK).json(users)
  }
}