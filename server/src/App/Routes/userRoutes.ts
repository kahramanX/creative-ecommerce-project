import * as userController from "../Controllers/UserController";
import { Router } from "express";

const router = Router();

// User Routes
// Create User
router.post("/create", userController.createUser);
// Login User
router.post("/login", userController.loginUser);
// Get User Infos
router.get("/:userID/get", userController.getUserInfos);
// Delete User
router.delete("/:userID/delete", userController.deleteUser);
// Update User
router.patch("/:userID/update", userController.updateUser);

export default router;
