import * as userController from "../Controllers/UserController";
import { Router } from "express";

const router = Router();

// User Routes
router.post("/create", userController.createUser);

router.get("/:userID/get", () => {});
router.delete("/:userID/delete", () => {});
router.patch("/:userID/update", () => {});

export default router;
