import { Router } from "express";
import UserController from "../controllers/usersController";

const router = Router();

const userController = new UserController();

router.get('/', userController.getAll);

export default Router;