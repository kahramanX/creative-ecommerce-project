import * as UserAddressController from "../Controllers/UserAddressController";
import { Router } from "express";

const router = Router();

//User Address Routes
//Create Address
router.post("/:userID/create", UserAddressController.createUserAddress);

export default router;
