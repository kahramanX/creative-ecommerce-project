import * as UserAddressController from "../Controllers/UserAddressController";
import { Router } from "express";

const router = Router();

//User Address Routes
//Create Address
router.post("/:userID/create", UserAddressController.createUserAddress);

// Delete Address
router.delete("/:userID/delete", UserAddressController.deleteUserAddress);

//Get Address Infos
router.get("/:userID/get", UserAddressController.getUserAddressInfos);

export default router;
