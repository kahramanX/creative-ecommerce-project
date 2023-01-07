import UserAddressModel from "../Models/UserAddressModel";
import { Request, Response } from "express";
import * as yup from "yup";

export const createUserAddress = (req: Request, res: Response) => {
  const {
    address_line_1,
    address_line_2,
    country,
    city,
    district,
    postal_code,
    address_phone,
  } = req.body;

  const { userID } = req.params;

  UserAddressModel.create({
    address_line_1,
    address_line_2,
    country,
    city,
    district,
    postal_code,
    address_phone,
    UserModelUserId: userID,
  })
    .then((createdAddress) => {
      res.json({ status: true, data: createdAddress });
    })
    .catch((error) => {
      console.log("olmadı");

      res.json({ status: false, message: "olmadı knk", data: error });
    });
};
