import * as userController from "../Controllers/UserController";
import { Router } from "express";

const router = Router();

// User Routes
router.post("/create", userController.createUser);
router.post("/login", userController.loginUser);

router.get("/:userID/get", userController.getUserInfos);
router.delete("/:userID/delete", userController.deleteUser);
router.patch("/:userID/update", userController.updateUser);

export default router;
